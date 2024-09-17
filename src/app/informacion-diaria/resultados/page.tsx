'use client'

import SearchResultsHeader from "@/components/SearchResultsHeader";
import EnhancedTable from "@/components/Table";
import { Skeleton, Table } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";


function ResultadosContent () {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [types, setTypes] = useState([])
  const [loadingTypes, setLoadingTypes] = useState(true)
  const [resultsLength, setResultsLength] = useState(0)
  const [temaName, setTemaName] = useState('')
  const [subtemaName, setSubtemaName] = useState('')
  const [loadingNames, setLoadingNames] = useState(true)
  const searchParams = useSearchParams();
  const tema = searchParams?.get('tema');
  const subtema = searchParams?.get('subtema');

  useEffect(()=>{
    setLoadingNames(true)
    const fetchNames = async () => {
      try {
        let route = ``
        if(subtema && subtema !== 'all') route = `/api/detail/subtema/${subtema}`
        if(tema && (!subtema || subtema === 'all')) route = `/api/detail/tema/${tema}`
        if(route){
          const response = await fetch(route);
          if(response.ok){
            const data = await response.json()
            const {ctema, csubtema} = data
            setTemaName(ctema)
            setSubtemaName(csubtema)
            setLoadingNames(false)
          }else {
            console.error('Error fetching temas:', response.statusText)
          }
        }else{
          setLoadingNames(false)
        }
      } catch (error) {
      console.error('Error connecting to the server:', error);
      }
    };
    fetchNames()
  }, [])

    return (
      <div className="py-5 px-5 sm:py-12 sm:px-20 bg-[#F6EFF5] h-[100vh]">
        <SearchResultsHeader
            displayDateSelect={false}
            displaySearchSelect={false}
            title="Buscar legislaciones"
            selectOptions={types}
            loadingTypes={loadingTypes}
            prevPath="/informacion-diaria"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            loadingNames={loadingNames}
            temaName={temaName}
            subtemaName={subtemaName}
          />
        <div className="pt-5 mt-2 sm:pt-5 sm:mt-5">
          {loadingTypes ? (
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>
          ): (
            <p className="text-black text-lg font-dm-sans mb-2">{resultsLength} resultado{resultsLength === 1 ? '' : 's'}</p>
          )}
          <EnhancedTable
          setTypes={setTypes}
          setLoadingTypes={setLoadingTypes}
          setResultsLength={setResultsLength}
          searchQuery={searchQuery}
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