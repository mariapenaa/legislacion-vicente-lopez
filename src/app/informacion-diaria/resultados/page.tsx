'use client'

import SearchResultsHeader from "@/components/SearchResultsHeader";
import EnhancedTable from "@/components/Table";
import { Table } from "@mui/material";
import { useState } from "react";

const selectOptions = {
  defaultText: 'Tipo de comunicado',
  options: [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' },
  ],
};

export default function Resultados() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
    return (
      <div className="py-5 px-5 sm:py-12 sm:px-20">
      <SearchResultsHeader
          title="Buscar legislaciones"
          selectOptions={selectOptions}
          prevPath="/informacion-diaria"
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
  