
// Importa los modelos necesarios y Sequelize si es necesario
import initModels from '../../../../../../models/init-models';// Ajusta la importación según tu estructura de archivos y modelos
import sequelize from '../../../../../../config/database';
import { NextResponse } from 'next/server';

const models = initModels(sequelize); 

type Params = {
    eidtema: string,
    eidsubtema: string,
}
 
  
export async function GET(request: Request, context: { params: Params }) {
  const { eidtema, eidsubtema } = context.params

  try {
    // Verificamos si el tema existe
    const tema = await models.leg_temas.findByPk(eidtema);
    if (!tema) {
      return NextResponse.error();
    }

    // Consultamos los subtemas asociados a ese eidtema
    const legislaciones = await models.legislacion.findAll({
      where: {
        eidtema,
        eidsubtema,
      }
    });

    // Retornamos los subtemas en formato JSON
    return NextResponse.json(legislaciones);
  } catch (error) {
    // Manejo de errores en caso de falla en la consulta
    console.error('Error al obtener los subtemas:', error);
    return NextResponse.error();
  }
}
