'use client';

import { SubTema } from "@/utils/subtema.interface";
import { FormControl, InputLabel, MenuItem, Select, Button, Skeleton, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from "dayjs";
import 'dayjs/locale/en-gb';

interface InformacionFormProps {
  title: string;
  subtitle: string;
  temaOptions: TemaOptions[];
  route: string;
  loadingTemas: boolean;
  firstSearchLabel: string;
  displaySearchFilter: boolean;
  displayDateFilter: boolean;
}

export interface TemaOptions {
  value: string | number;
  label: string;
}

export default function MainFormPage({ title, subtitle, temaOptions, route, loadingTemas, firstSearchLabel, displaySearchFilter, displayDateFilter }: InformacionFormProps) {
  const router = useRouter();
  const [tema, setTema] = useState('');
  const [subtema, setSubtema] = useState('');
  const [nombre, setNombre] = useState('')
  const [fechaInicio, setFechaInicio] = useState<Dayjs | null>(null)
  const [fechaFin, setFechaFin] = useState<Dayjs | null>(null)
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

  const handleStringChange = (e: any) => {
    const { id, value } = e.target;
    setNombre(value)
  };

  const handleButtonClick = () => {
    const params = new URLSearchParams();
    params.append('tema', tema);
    params.append('subtema', subtema);
    if (nombre) params.append('nombre', nombre);
    if (fechaInicio) params.append('fechaInicio', fechaInicio.format('YYYY-MM-DD'));
    if (fechaFin) params.append('fechaFin', fechaFin.format('YYYY-MM-DD'));
    router.push(`${route}?${params.toString()}`);
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
      <div className="flex absolute h-[50vh] w-[100%] justify-center bg-gradient-to-r from-[#54317F] to-[#7C2C79]">
      </div>
      <div className="w-full relative z-10 sm:w-auto px-5 py-10 sm:py-36 md:px-[10rem] xl:px-[25rem]  lg:px-[20rem] 2xl:px-[30rem]">
        <div className="flex-col pt-100">
          <p className='text-center text-2xl md:text-4xl sm:text-6xl mb-2 main-title text-white '>{title}</p>
          <p className="text-md md:text-2xl sm:text-3xl text-center text-white">{subtitle}</p>
        </div>
        <div className="shadow-lg flex-col bg-white sm:p-8 p-5 rounded-[10px] sm:mt-12 md:mt-8 mt-2">
          <div className="mb-5 sm:mb-8">
            <p className="text-md sm:text-xl">{firstSearchLabel}</p>
              {loadingTemas ? (
                  <Skeleton variant="rectangular" width="100%" height={52} />
                ) : (
                  <div>
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
                    <p onClick={() => {setTema(''), setSubtema(''), setSubtemaOptions([])}} className="cursor-pointer underline text-[#762D7B] text-md mt-2 font-dm-sans">Limpiar</p>
                  </div>
                )
              }
          </div>
          <div className="mb-5 sm:mb-8">
            <p className="text-md sm:text-xl">Seleccione el subtema que quiere consultar</p>
            { loadingSubTemas ? (
              <Skeleton variant="rectangular" width="100%" height={52} />
              ): (
                <div>
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
                        <MenuItem value="all"><b>VER TODO</b></MenuItem>
                      {subtemaOptions?.map((option: any) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <p onClick={() => {setSubtema('')}} className="cursor-pointer underline text-[#762D7B] text-md mt-2 font-dm-sans">Limpiar</p>
                </div>
                  )
            }
          </div>
          {displaySearchFilter ? (
            <div className="mb-5 sm:mb-8">
              <p className="text-md sm:text-xl">Búsqueda por palabra</p>
              <TextField onChange={handleStringChange} value={nombre} className="w-full mt-2 sm:mt-5" label="Nombre de la legislación" variant="outlined" />
            </div>
          ): (
            <></>
          )}
          {displayDateFilter ? (
            <div className="mb-5 sm:mb-8">
              <p className="text-md sm:text-xl">Búsqueda por fecha</p>
              <div className="flex gap-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="en-gb">
                  <DatePicker
                    views={['year', 'month', 'day']}
                    className="w-full mt-2 sm:mt-5"
                    label="Inicio"
                    value={fechaInicio}
                    onChange={(newValue: any) => setFechaInicio(newValue)}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="en-gb">
                  <DatePicker
                    className="w-full mt-2 sm:mt-5"
                    label="Fin"
                    views={['year', 'month', 'day']}
                    value={fechaFin}
                    onChange={(newValue: any) => setFechaFin(newValue)}
                    referenceDate={fechaInicio || null} 
                  />
                </LocalizationProvider>
              </div>
            </div>
          ): (
            <></>
          )}
          <div className="flex justify-end">
            <Button variant="contained" disabled={((!subtema || !tema) && nombre === '') || (fechaInicio !== null && fechaFin === null) || (fechaFin !== null && fechaInicio === null)} onClick={handleButtonClick}>Buscar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
