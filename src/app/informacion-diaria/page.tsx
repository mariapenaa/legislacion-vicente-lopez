"use client";
import MainFormPage, { TemaOptions } from "@/pages/MainFormPage";
import { Tema } from "@/utils/tema.interface";
import { useState, useEffect } from "react";

export default function InformacionDiaria() {
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
          const correspondingTemas = formattedData.filter((tema: TemaOptions)=> tema.label.includes('DECRETOS D.E.') || tema.label.includes('ORDENANZAS') || tema.label.includes('RESOLUCIONES D.E.') )
          setTemaOptions(correspondingTemas);
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
      title="Informacion Diaria"
      subtitle="Consultá de manera simple y ágil la información diaria"
      temaOptions={temaOptions}
      loadingTemas={loadingTemas}
      route="informacion-diaria/resultados"
    />
  );
}
