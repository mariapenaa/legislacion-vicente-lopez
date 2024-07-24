// pages/api/temas.js

import { NextResponse } from 'next/server';
import sequelize from '../../../../config/database';
import initModels from '../../../../models/init-models';

const models = initModels(sequelize); // Initialize Sequelize models

export async function GET() {
  try {
   /*  const temas = await models.leg_temas.findAll(); */
    const temas = [
      {
          "eidtema": 1,
          "ctema": "HISTORIA DEL PARTIDO"
      },
      {
          "eidtema": 2,
          "ctema": "LEY8912 (USO DEL SUELO)"
      },
      {
          "eidtema": 3,
          "ctema": "LEY 9533 (REGIMEN DE LOS INMUEBLES DEL DOMINIO MUNICIPAL Y PROVINCIAL)"
      },
      {
          "eidtema": 4,
          "ctema": "CODIGO DE ORDENAMIENTO URBANO"
      },
      {
          "eidtema": 5,
          "ctema": "CODIGO DE EDIFICACION"
      },
      {
          "eidtema": 6,
          "ctema": "AMNISTIAS"
      },
      {
          "eidtema": 7,
          "ctema": "ANTENAS Y ESTRUCTURAS"
      },
      {
          "eidtema": 147,
          "ctema": "ORGANIGRAMA MUNICIPAL"
      },
      {
          "eidtema": 9,
          "ctema": "-ORDENANZA PRESUPUESTARIA"
      },
      {
          "eidtema": 10,
          "ctema": "TRAMITE ADMINISTRATIVO"
      },
      {
          "eidtema": 11,
          "ctema": "CODIGO CONTRAVENCIONAL-MULTAS- FALTAS."
      },
      {
          "eidtema": 12,
          "ctema": "ENTIDADES DE BIEN PUBLICO"
      },
      {
          "eidtema": 13,
          "ctema": "HABILITACIONES- COMERCIO"
      },
      {
          "eidtema": 14,
          "ctema": "INDUSTRIAS"
      },
      {
          "eidtema": 15,
          "ctema": "OCUPACION DE LA VIA PUBLICA"
      },
      {
          "eidtema": 16,
          "ctema": "TRANSITO Y TRANSPORTE"
      },
      {
          "eidtema": 17,
          "ctema": "SEGURIDAD"
      },
      {
          "eidtema": 18,
          "ctema": "ECOLOGIA Y MEDIO AMBIENTE"
      },
      {
          "eidtema": 19,
          "ctema": "AREA RIBEREÑA"
      },
      {
          "eidtema": 20,
          "ctema": "SALUD PUBLICA"
      },
      {
          "eidtema": 21,
          "ctema": "PERSONAS CON MOTRICIDAD Y COMUNICACIÓN REDUCIDA"
      },
      {
          "eidtema": 22,
          "ctema": "MENORES, DISCRIMINACION Y VIOLENCIA DE GENERO"
      },
      {
          "eidtema": 144,
          "ctema": "-ORDENANZA IMPOSITIVA"
      },
      {
          "eidtema": 24,
          "ctema": "ZOONOSIS Y BROMATOLOGIA"
      },
      {
          "eidtema": 25,
          "ctema": "EDUCACION Y CULTURA"
      },
      {
          "eidtema": 26,
          "ctema": "DEFENSA DE CONSUMIDORES Y USUARIOS"
      },
      {
          "eidtema": 27,
          "ctema": "DEPORTES Y TURISMO"
      },
      {
          "eidtema": 28,
          "ctema": "ESPARCIMIENTO"
      },
      {
          "eidtema": 29,
          "ctema": "PUBLICIDAD Y PROPAGANDA"
      },
      {
          "eidtema": 30,
          "ctema": "CEMENTERIO"
      },
      {
          "eidtema": 32,
          "ctema": "DEFENSA CIVIL"
      },
      {
          "eidtema": 143,
          "ctema": "-ORDENANZA FISCAL"
      },
      {
          "eidtema": 159,
          "ctema": "EMPLEO PUBLICO MUNICIPAL"
      },
      {
          "eidtema": 151,
          "ctema": " DECRETOS D.E."
      },
      {
          "eidtema": 150,
          "ctema": " ORDENANZAS"
      },
      {
          "eidtema": 146,
          "ctema": "LEGISLACION FISCAL"
      },
      {
          "eidtema": 164,
          "ctema": " RESOLUCIONES D.E."
      },
      {
          "eidtema": 160,
          "ctema": "DEFENSOR DEL PUEBLO "
      },
      {
          "eidtema": 166,
          "ctema": " DECRETOS HCD"
      },
      {
          "eidtema": 167,
          "ctema": " RESOLUCIONES HCD"
      },
      {
          "eidtema": 171,
          "ctema": "CONTRATACION DE BIENES Y SERVICIOS"
      }
  ]
    return NextResponse.json(temas);
  } catch (error) {
    console.error('Error fetching temas:', error);
    return NextResponse.error();
  }
}
