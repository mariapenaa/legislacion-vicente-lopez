// Importa los modelos necesarios y Sequelize si es necesario
import initModels from '../../../../../../models/init-models';// Ajusta la importación según tu estructura de archivos y modelos
import sequelize from '../../../../../../config/database';
import { NextResponse } from 'next/server';

if (!sequelize) {
  throw new Error('Database connection is not initialized.');
}

const models = initModels(sequelize);

type Params = {
    eidsubtema: string
}


export async function GET(request: Request, context: { params: Params }) {
  const { eidsubtema } = context.params
  try {
    const subtema = await models.leg_subtemas.findOne({
        where: {eidsubtema},
    });
    if (!subtema) {
        return NextResponse.error();
    }
    const { eidtema, csubtema } = subtema
    const { ctema } = await models.leg_temas.findByPk(eidtema)
    const response = {
        csubtema,
        ctema,
    }
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error al obtener los subtemas:', error);
    return NextResponse.error();
  }
}
