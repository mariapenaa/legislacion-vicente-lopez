import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { Search } from '@mui/icons-material';
import { FormControl, InputAdornment, Link, MenuItem, Select, Skeleton, TextField } from '@mui/material';
import { usePathname } from 'next/navigation';

interface SearchResultsHeaderProps {
  title: string;
  selectOptions: string[];
  prevPath: string;
  searchQuery: string;
  setSearchQuery: any;
  selectedFilter: string;
  loadingTypes: boolean;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({ 
  title,
  selectOptions,
  prevPath,
  searchQuery,
  setSearchQuery,
  selectedFilter,
  loadingTypes,
  setSelectedFilter}) => {
  const paths = usePathname();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setSelectedFilter(event.target.value as string);
  };
  return (
    <div>
      <Breadcrumb />
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
                <p className='input-text'>Seleccione un tema</p>
              </MenuItem>
              {selectOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
      <div>
        <Link href={prevPath} className="cursor-pointer underline text-[#762D7B] text-md mt-2 font-dm-sans">Seleccionar un nuevo tema</Link>
      </div>
    </div>
  );
};

export default SearchResultsHeader;
