// Importa los modelos necesarios y Sequelize si es necesario
import initModels from '../../../../../models/init-models';// Ajusta la importación según tu estructura de archivos y modelos
import sequelize from '../../../../../config/database';
import { NextResponse } from 'next/server';

if (!sequelize) {
  throw new Error('Database connection is not initialized.');
}

const models = initModels(sequelize);

type Params = {
    eidtema: string
}
 
  
export async function GET(request: Request, context: { params: Params }) {
  const { eidtema } = context.params

  try {
    const tema = await models.leg_temas.findByPk(eidtema);
    if (!tema) {
      return NextResponse.error();
    }

    const subtemas = await models.leg_subtemas.findAll({
      where: {
        eidtema: eidtema // Filtramos por el eidtema recibido
      }
    });
    return NextResponse.json(subtemas);
  } catch (error) {
    // Manejo de errores en caso de falla en la consulta
    console.error('Error al obtener los subtemas:', error);
    return NextResponse.error();
  }
}
