'use client'
import SearchResultsHeader from '@/components/SearchResultsHeader'
import EnhancedTable from '@/components/Table'
import { Skeleton } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'

function ResultadosContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [types, setTypes] = useState([])
  const [loadingTypes, setLoadingTypes] = useState(true)
  const [resultsLength, setResultsLength] = useState(0)
  const searchParams = useSearchParams();
  const tema = searchParams?.get('tema');
  const subtema = searchParams?.get('subtema');


  return (
    <div className="py-5 px-5 sm:py-12 sm:px-20">
      <SearchResultsHeader
          title="Buscar legislaciones"
          selectOptions={types}
          loadingTypes={loadingTypes}
          prevPath="/reglamentaria"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      <div className="pt-5 mt-2 sm:pt-5 sm:mt-5">
        {loadingTypes ? (
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>
        ): (
          <p className="text-black text-lg font-dm-sans mb-2">{resultsLength} resultados</p>
        )}
        <EnhancedTable
        setTypes={setTypes}
        setLoadingTypes={setLoadingTypes}
        searchQuery={searchQuery}
        setResultsLength={setResultsLength}
        selectedFilter={selectedFilter}
        queryParams={{tema, subtema}}
        />
      </div>
    </div>
  );
  }
  
  export default function Resultados() {
    return (
      <Suspense fallback={<Skeleton variant="rectangular" width="100%" height="100vh" />}>
        <ResultadosContent />
      </Suspense>
    );
  }