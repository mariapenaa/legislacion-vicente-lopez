import React, { useMemo, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { Search } from '@mui/icons-material';
import { FormControl, InputAdornment, Link, MenuItem, Select, Skeleton, TextField } from '@mui/material';
import { usePathname } from 'next/navigation';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb';

interface SearchResultsHeaderProps {
  title: string;
  selectOptions: string[];
  prevPath: string;
  searchQuery: string;
  setSearchQuery: any;
  selectedFilter: string;
  loadingTypes: boolean;
  displaySearchSelect: boolean;
  displayDateSelect: boolean;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  loadingNames: boolean;
  temaName: string;
  subtemaName: string;
  setSelectedStartDate?: any;
  setSelectedEndDate?: any;
  searchName?: string | undefined | null;
}

const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({ 
  title,
  selectOptions,
  prevPath,
  searchQuery,
  setSearchQuery,
  selectedFilter,
  loadingTypes,
  displaySearchSelect,
  setSelectedFilter,
  loadingNames,
  temaName,
  subtemaName,
  searchName,
  setSelectedEndDate,
  setSelectedStartDate,
  displayDateSelect,
}) => {
  const [fechaInicio, setFechaInicio] = useState<Dayjs | null>(null)
  const [fechaFin, setFechaFin] = useState<Dayjs | null>(null)
  const paths = usePathname();
  const pathNames = paths?.split('/').filter(path => path)
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setSelectedFilter(event.target.value as string);
  };

  const handleStartDateChange = (date: any) => {
    setSelectedStartDate(date)
  }

  const handleEndDateChange = (date: any) => {
    setSelectedEndDate(date)
  }

  const breadcrumbArray = useMemo(()=>{
    const items = [
      {
        href: `/${pathNames && pathNames[0] ? pathNames[0] : ''}`,
        name: `${pathNames && pathNames[0] && pathNames[0] === 'legislacion' ? 'Legislación' : 'Digesto Digital'}`,
        bold: false
      },
      {
          href: ``,
          name: 'Resultados',
          bold: true
      },
    ]
    if(temaName) {
      items.push({
        href: ``,
        name: temaName,
        bold: false,
      })
    }
    if(subtemaName){
      items.push({
        href: ``,
        name: subtemaName,
        bold: false,
      })
    }
    if(searchName){
      items.push({
        href: ``,
        name: searchName,
        bold: false,
      })
    }
    return items;
  }, [temaName, subtemaName, searchName])

  return (
    <div>
      {loadingNames ? (
         <Skeleton variant="rectangular"  className="w-full ml-2 sm:w-80" height={54} />
      ): (
        <Breadcrumb 
                  items={breadcrumbArray}
                  />
      )}
      <h1 className="my-4 sm:text-3xl text-2xl">{title}</h1>
      <div className="flex">
        <TextField
          className="bg-white w-full mb-2 sm:mb-0 sm:w-96 mr-2"
          id="search-field"
          placeholder='Buscar'
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        {displaySearchSelect ? (
          <>
            {loadingTypes ? (
              <Skeleton variant="rectangular"  className="w-full ml-2 sm:w-80" height={54} />
            ) : (
              <FormControl className="m-0 w-full sm:w-80">
                <Select
                  className="bg-white"
                  value={selectedFilter}
                  onChange={handleFilterChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <p className='input-text'>Seleccione una normativa</p>
                  </MenuItem>
                  {selectOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </>
        ): (
          <></>
        )}
        {displayDateSelect ? (
          <div className="flex gap-2 ml-2">
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="en-gb">
                <DatePicker
                  views={['year', 'month', 'day']}
                  className="w-full bg-white"
                  label="Fecha inicio"
                  value={fechaInicio}
                  onChange={(newValue: any) => handleStartDateChange(newValue)}
                />
              </LocalizationProvider>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="en-gb">
                <DatePicker
                  views={['year', 'month', 'day']}
                  className="w-full bg-white"
                  label="Fecha fin"
                  value={fechaFin}
                  onChange={(newValue: any) => handleEndDateChange(newValue)}
                  referenceDate={fechaInicio || null} 
                />
              </LocalizationProvider>
            </div>
          </div>
        ) : (<></>)}
      </div>
      <div>
        <Link href={prevPath} className="cursor-pointer underline text-[#762D7B] text-md mt-2 font-dm-sans">Seleccionar un nuevo tema</Link>
      </div>
    </div>
  );
};

export default SearchResultsHeader;
