
// Importa los modelos necesarios y Sequelize si es necesario
import initModels from '../../../../../../models/init-models';// Ajusta la importación según tu estructura de archivos y modelos
import sequelize from '../../../../../../config/database';
import { NextResponse } from 'next/server';
import { Op, Sequelize } from 'sequelize';

if (!sequelize) {
  throw new Error('Database connection is not initialized.');
}

const models = initModels(sequelize);


type Params = {
    nombre: string,
}
 
  
export async function GET(request: Request, context: { params: Params }) {
  const { nombre } = context.params

  try {
    const legislaciones = await models.legislacion.findAll({
        where: {
            ctitulo: {
                [Op.like]: `%${nombre}%`,
              },
          }
    });
    return NextResponse.json(legislaciones);
  } catch (error) {
    // Manejo de errores en caso de falla en la consulta
    console.error('Error al obtener las legislaciones:', error);
    return NextResponse.error();
  }
}
