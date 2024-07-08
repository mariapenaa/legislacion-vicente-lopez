"use client";

import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    mail: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({
    mail: ""
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { nombre, mail, mensaje } = form;
    if (nombre && mail && mensaje && !errors.mail) {
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
    if (id === "mail") {
      validateEmailOnBlur(value);
    }
  };

  const validateEmailOnBlur = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mail: "El correo electrónico no es válido."
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mail: ""
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate email before submitting
    if (!validateEmail(form.mail)) {
      setErrors({ mail: "El correo electrónico no es válido." });
      return;
    }

    // If email is valid, clear errors and proceed with form submission
    setErrors({ mail: "" });
    console.log("Form submitted:", form);

    // Clear the form
    setForm({
      nombre: "",
      mail: "",
      mensaje: ""
    });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="py-5 px-5 md:py-6 sm:py-12 md:px-28 sm:px-96">
      <h2 className="text-3xl sm:text-6xl">¡Contáctanos!</h2>
      <h3 className="mt-2 sm:text-3xl sm:mt-5">¿Necesitas ayuda con algo? Ponete en contacto con nuestro equipo</h3>
      <form onSubmit={handleSubmit} className="p-5 sm:p-10 mt-5 rounded shadow bg-white flex flex-col items-start justify-center">
        <TextField
          className="w-full mb-5"
          id="nombre"
          label="Nombre"
          variant="outlined"
          value={form.nombre}
          onChange={handleChange}
        />
        <TextField
          className="w-full mb-5"
          id="mail"
          label="Mail"
          variant="outlined"
          value={form.mail}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.mail}
          helperText={errors.mail}
        />
        <TextField
          className="w-full mb-5"
          id="mensaje"
          multiline
          rows={4}
          label="Mensaje"
          variant="outlined"
          value={form.mensaje}
          onChange={handleChange}
        />
        <div className="flex w-full justify-end">
          <Button type="submit" variant="contained" disabled={!isFormValid}>Enviar</Button>
        </div>
      </form>
    </div>
  );
}
