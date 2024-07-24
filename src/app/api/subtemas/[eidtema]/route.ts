// Importa los modelos necesarios y Sequelize si es necesario
import initModels from '../../../../../models/init-models';// Ajusta la importación según tu estructura de archivos y modelos
/* import sequelize from '../../../../../config/database'; */
import { NextResponse } from 'next/server';

/* const models = initModels(sequelize);  */

type Params = {
    eidtema: string
}
 
  
export async function GET(request: Request, context: { params: Params }) {
  const { eidtema } = context.params

  try {
    /* const tema = await models.leg_temas.findByPk(eidtema);
    if (!tema) {
      return NextResponse.error();
    }

    const subtemas = await models.leg_subtemas.findAll({
      where: {
        eidtema: eidtema // Filtramos por el eidtema recibido
      }
    }); */

    // Retornamos los subtemas en formato JSON
    const subtemas = [
      {
          "eidsubtema": 1,
          "csubtema": "ESCUDO",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      },
      {
          "eidsubtema": 2,
          "csubtema": "BANDERA",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      },
      {
          "eidsubtema": 3,
          "csubtema": "CREACION DEL PARTIDO",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      },
      {
          "eidsubtema": 4,
          "csubtema": "DELEGACIONES",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      },
      {
          "eidsubtema": 5,
          "csubtema": "PATRONO",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      },
      {
          "eidsubtema": 6,
          "csubtema": "LIMITES",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      },
      {
          "eidsubtema": 7,
          "csubtema": "CIUDADANOS ILUSTRES",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      },
      {
          "eidsubtema": 8,
          "csubtema": "CONVENIOS DE HERMANDAD",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      },
      {
          "eidsubtema": 9,
          "csubtema": "VARIOS",
          "eidtema": 1,
          "cdescripcion": "HISTORIA DEL PARTIDO"
      }
  ]
    return NextResponse.json(subtemas);
  } catch (error) {
    // Manejo de errores en caso de falla en la consulta
    console.error('Error al obtener los subtemas:', error);
    return NextResponse.error();
  }
}
