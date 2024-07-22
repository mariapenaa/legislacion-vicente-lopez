'use client';

import { SubTema } from "@/utils/subtema.interface";
import { FormControl, InputLabel, MenuItem, Select, Button, Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface InformacionFormProps {
  title: string;
  subtitle: string;
  temaOptions: TemaOptions[];
  route: string;
  loadingTemas: boolean;
}

export interface TemaOptions {
  value: string | number;
  label: string
}

export default function MainFormPage({ title, subtitle, temaOptions, route, loadingTemas }: InformacionFormProps) {
  const router = useRouter();
  const [tema, setTema] = useState('');
  const [subtema, setSubtema] = useState('');
  const [subtemaOptions, setSubtemaOptions] = useState([]);
  const [loadingSubTemas, setLoadingSubTemas] = useState(false);

  const handleTemaChange = (event: any) => {
    setTema(event.target.value);
    setSubtema('')
    fetchSubTemas(event.target.value)
  };

  const handleSubtemaChange = (event: any) => {
    setSubtema(event.target.value);
  };

  const handleButtonClick = () => {
    const queryString = new URLSearchParams({ tema, subtema }).toString();
    router.push(`${route}?${queryString}`);
  };

  const fetchSubTemas = async (id: number) => {
    try {
      setLoadingSubTemas(true)
      const response = await fetch(`/api/subtemas/${id}`);
      if (response.ok) {
        const data = await response.json();
        const formattedData = data.map((tema: SubTema) => ({ value: tema.eidsubtema, label: tema.csubtema }));
        setSubtemaOptions(formattedData);
        setLoadingSubTemas(false)
      } else {
        console.error('Error fetching temas:', response.statusText);
      }
    } catch (error) {
      console.error('Error connecting to the server:', error);
    }
  };

  return (
    <div className="relative">
      <div className="flex h-[50vh] w-100 justify-center bg-gradient-to-r from-[#54317F] to-[#7C2C79]">
      </div>
      <div className="absolute w-full sm:w-auto px-5 sm:p-0 top-1/2 left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex-col pt-100">
          <p className='text-center text-2xl md:text-4xl sm:text-6xl mb-2 main-title text-white '>{title}</p>
          <p className="text-md md:text-2xl sm:text-3xl text-center text-white">{subtitle}</p>
        </div>
        <div className="shadow-lg flex-col bg-white sm:p-8 p-5 rounded-[10px] sm:mt-12 md:mt-8 mt-2">
          <div className="mb-5 sm:mb-8">
            <p className="text-md sm:text-xl">Seleccione el tema que quiere consultar</p>
              {loadingTemas ? (
                  <Skeleton variant="rectangular" width="100%" height={52} />
                ) : (
                  <FormControl fullWidth className="mt-2 sm:mt-5">
                    <InputLabel id="tema-select-label">Tema</InputLabel>
                    <Select
                      labelId="tema-select-label"
                      id="tema-select"
                      label="Tema"
                      value={tema}
                      onChange={handleTemaChange}
                    >
                      {temaOptions?.map(option => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )
              }
          </div>
          <div className="mb-5 sm:mb-8">
            <p className="text-md sm:text-xl">Seleccione el subtema que quiere consultar</p>
            { loadingSubTemas ? (
              <Skeleton variant="rectangular" width="100%" height={52} />
              ): (
              <FormControl fullWidth className="mt-2 sm:mt-5">
                <InputLabel id="subtema-select-label">Subtema</InputLabel>
                <Select
                  disabled={!subtemaOptions || subtemaOptions.length === 0}
                  labelId="subtema-select-label"
                  id="subtema-select"
                  label="Subtema"
                  value={subtema}
                  onChange={handleSubtemaChange}
                >
                  {subtemaOptions?.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              )
            }
          </div>
          <div className="flex justify-end">
            <Button variant="contained" disabled={!subtema || !tema} onClick={handleButtonClick}>Buscar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
