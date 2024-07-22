"use client";
import MainFormPage from "@/pages/MainFormPage";
import { Tema } from "@/utils/tema.interface";
import { useState, useEffect } from "react";


export default function Reglamentaria() {
  const [temaOptions, setTemaOptions] = useState([]);
  const [loadingTemas, setLoadingTemas] = useState(true);

  useEffect(()=>{
    setLoadingTemas(true)
    const fetchTemas = async () => {
      try {
        const response = await fetch('/api/temas');
        if (response.ok) {
          const data = await response.json();
          const formattedData = data.map((tema: Tema) => ({ value: tema.eidtema, label: tema.ctema }));
          setTemaOptions(formattedData);
          setLoadingTemas(false)
        } else {
          console.error('Error fetching temas:', response.statusText);
        }
      } catch (error) {
        console.error('Error connecting to the server:', error);
      }
    };
    fetchTemas()
  }, [])

  return (
    <MainFormPage
      title="Reglamentario"
      subtitle="Consultá de manera simple y ágil la reglamentación"
      temaOptions={temaOptions}
      loadingTemas={loadingTemas}
      route="reglamentaria/resultados"
    />
  );
}
