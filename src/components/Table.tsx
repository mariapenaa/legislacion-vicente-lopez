"use client";

import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { FormattedLeg, Legislacion } from '@/utils/legislacion.interface';
import { Skeleton } from '@mui/material';
import { DateTime } from 'luxon';

interface Data {
  id: number;
  type: string;
  date: string;
  name: string;
  publication:string,
}

function createData(
    id: number,
    type: string,
    date: string,
    name: string,
    publication: string,
): Data {
  return {
    id,
    name,
    date,
    type,
    publication,
  }
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Legislación',
  },
  {
    id: 'type',
    numeric: true,
    disablePadding: false,
    label: 'Tipo',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Fecha',
  },
  {
    id: 'publication',
    numeric: true,
    disablePadding: false,
    label: 'Ver Publicación',
  }
];

interface EnhancedTableHeadProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableHeadProps) {
  const { order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableProps {
  searchQuery: string;
  selectedFilter: string;
  queryParams: {tema: any, subtema: any},
  setTypes: any;
  setLoadingTypes: any
  setResultsLength: any
}


export default function EnhancedTable({ searchQuery, setResultsLength, selectedFilter, queryParams, setTypes, setLoadingTypes }:EnhancedTableProps) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [legislaciones, setLegislaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const formatDate = (datetime: string) => {
    const date = new Date(datetime);
    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    
    return formattedDate
  }
  useEffect(()=>{
    setLoading(true)
    setLoadingTypes(true)
    const { tema, subtema } = queryParams
    const fetchTemas = async () => {
      try {
        const response = await fetch(`/api/legislacion/${tema}/${subtema}`);
        if (response.ok) {
          const data = await response.json();
          const formattedData = data.map((leg: Legislacion) => ({ name: leg.ctitulo, type: leg.cnom_archivo, id: leg.eidlegislacion, date:formatDate(leg.fecha_ing), publication: "Ver publicación" }));
          setLegislaciones(formattedData);
          const uniqueTypes = Array.from(new Set(formattedData.map((legislacion: FormattedLeg) => legislacion.type)));
          console.log(uniqueTypes)
          setTypes(uniqueTypes)
          setLoading(false)
          setLoadingTypes(false)
          setResultsLength(formattedData.length)
        } else {
          console.error('Error fetching temas:', response.statusText);
        }
      } catch (error) {
        console.error('Error connecting to the server:', error);
      }
    };
    fetchTemas()
  }, []) 
  
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = legislaciones.map((n: FormattedLeg) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - legislaciones.length) : 0;

    const filteredRows = useMemo(() => {
      return legislaciones.filter((row: FormattedLeg) => {
        return (
          row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (selectedFilter === '' || row.type === selectedFilter)
        );
      });
    }, [searchQuery, selectedFilter, legislaciones]);
  
    const visibleRows = useMemo(() => {
      return stableSort(filteredRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      );
    }, [order, orderBy, page, rowsPerPage, filteredRows]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={legislaciones.length}
            />
            <TableBody>
              {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell padding="checkbox"></TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    </TableCell>
                    <TableCell align="right"><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
                    <TableCell align="right"><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
                    <TableCell align="right"><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
                  </TableRow>
                ))
              ) : (
                visibleRows.map((row: any, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">
                        <Link className="underline flex justify-end" href={`${pathname}/${row.id}`} passHref>
                          {row.publication}
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
              {emptyRows > 0 && (
                <TableRow style={{ height: (53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
