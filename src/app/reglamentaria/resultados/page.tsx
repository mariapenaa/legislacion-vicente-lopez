'use client'
 
import Breadcrumb from '@/components/Breadcrumb'
import SearchResultsHeader from '@/components/SearchResultsHeader'
import EnhancedTable from '@/components/Table'
import { AccountCircle, Search } from '@mui/icons-material'
import { FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { DM_Sans } from 'next/font/google'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'

const dmSans = DM_Sans({ subsets: ["latin"] });
const selectOptions = {
  defaultText: 'Tipo de comunicado',
  options: [
    { value: 'Decreto 24828', label: 'Decreto 24828' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' },
  ],
};
export default function Resultados() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className="py-5 px-5 sm:py-12 sm:px-20">
      <SearchResultsHeader
          title="Buscar legislaciones"
          selectOptions={selectOptions}
          prevPath="/reglamentaria"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      <div className="pt-5 mt-2 sm:pt-5 sm:mt-5">
        <p className="text-black text-lg font-dm-sans mb-2">302 resultados en Legislación Fiscal - Tributos</p>
        <EnhancedTable
        searchQuery={searchQuery}
        selectedFilter={selectedFilter}
        />
      </div>
    </div>
  );
  }
  