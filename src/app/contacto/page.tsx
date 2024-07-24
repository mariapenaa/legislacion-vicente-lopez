"use client";

import React, { useEffect, useState } from "react";
import { Alert, Button, TextField, formControlClasses, CircularProgress } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [success, setSucces] = useState(false)
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState({
    email: ""
  });
  const [loading, setLoading] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, email, message } = form;
    if (name && email && message && !errors.email) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [form, errors]);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value
    }));
  };

  const handleBlur = (e: any) => {
    const { id, value } = e.target;
    if (id === "email") {
      validateEemailOnBlur(value);
    }
  };

  const validateEemailOnBlur = (eemail: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(eemail).toLowerCase())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "El correo electrónico no es válido."
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ""
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true)
    // Validate eemail before submitting
    if (!validateEemail(form.email)) {
      setErrors({ email: "El correo electrónico no es válido." });
      setLoading(false)
      return;
    }
    const apiEndpoint = '/api/email';
    console.log(form)
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((response) => {
        setErrors({ email: "" });
        setForm({
          name: "",
          email: "",
          message: ""
        });
        setLoading(false)
        setSucces(true)
      })
      .catch((err) => {
        setError(true)
        setLoading(false)
      });
  };

  const validateEemail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="py-5 px-5 md:py-10 sm:py-12  md:px-60 sm:px-96">
      <h2 className="text-3xl sm:text-6xl">¡Contáctanos!</h2>
      <h3 className="mt-2 sm:text-3xl sm:mt-5">¿Necesitas ayuda con algo? Ponete en contacto con nuestro equipo</h3>
      <form onSubmit={handleSubmit} className="p-5 sm:p-10 mt-5 rounded shadow bg-white flex flex-col items-start justify-center">
        <TextField
          className="w-full mb-5"
          id="name"
          label="Nombre"
          variant="outlined"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          className="w-full mb-5"
          id="email"
          label="Mail"
          variant="outlined"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          className="w-full mb-5"
          id="message"
          multiline
          rows={4}
          label="Mensaje"
          variant="outlined"
          value={form.message}
          onChange={handleChange}
        />
        <div className="flex w-full justify-end">
          <Button type="submit" variant="contained" disabled={!isFormValid}>
            {loading ? (
              <CircularProgress color="inherit" size={20}/>
            ):  ('Enviar')}
          </Button>
        </div>
      </form>
      {success ? (
        <Alert className="mt-5" icon={<CheckIcon fontSize="inherit" />} severity="success">
          El mensaje fue enviado con éxito
        </Alert>
      ) : (<></>)}
      {error ?(
      <Alert className="mt-5" icon={<ErrorIcon fontSize="inherit" />} severity="error">
        Hubo un problema enviando el mensaje
      </Alert>
      ) : (<></>)
      }
    </div>
  );
}
