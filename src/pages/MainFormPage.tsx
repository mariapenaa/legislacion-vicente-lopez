'use client';

import { FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface InformacionFormProps {
  title: string;
  subtitle: string;
  temaOptions: { value: string | number; label: string }[];
  subtemaOptions: { value: string | number; label: string }[];
  route: string;
}

export default function MainFormPage({ title, subtitle, temaOptions, subtemaOptions, route }: InformacionFormProps) {
  const router = useRouter();
  const [tema, setTema] = useState('');
  const [subtema, setSubtema] = useState('');

  const handleTemaChange = (event: any) => {
    setTema(event.target.value);
  };

  const handleSubtemaChange = (event: any) => {
    setSubtema(event.target.value);
  };

  const handleButtonClick = () => {
    const queryString = new URLSearchParams({ tema, subtema }).toString();
    router.push(`${route}?${queryString}`);
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
          </div>
          <div className="mb-5 sm:mb-8">
            <p className="text-md sm:text-xl">Seleccione el subtema que quiere consultar</p>
            <FormControl fullWidth className="mt-2 sm:mt-5">
              <InputLabel id="subtema-select-label">Subtema</InputLabel>
              <Select
                labelId="subtema-select-label"
                id="subtema-select"
                label="Subtema"
                value={subtema}
                onChange={handleSubtemaChange}
              >
                {subtemaOptions?.map(option => (
                  <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex justify-end">
            <Button variant="contained" onClick={handleButtonClick}>Buscar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
