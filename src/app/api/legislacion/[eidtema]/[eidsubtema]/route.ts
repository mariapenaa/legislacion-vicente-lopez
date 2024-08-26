
// Importa los modelos necesarios y Sequelize si es necesario
import initModels from '../../../../../../models/init-models';// Ajusta la importación según tu estructura de archivos y modelos
import sequelize from '../../../../../../config/database';
import { NextResponse } from 'next/server';
import { Op } from 'sequelize';

if (!sequelize) {
  throw new Error('Database connection is not initialized.');
}

const models = initModels(sequelize);


type Params = {
    eidtema: string,
    eidsubtema: string,
}
 
  
export async function GET(req: Request, context: { params: Params }) {
  const { eidtema, eidsubtema } = context.params
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type')

  if (!eidtema || !eidsubtema) {
    return NextResponse.error();
  }


  try {
    const legTemasDiaria = await models.leg_temas.findAll({
      where: {
        ctema: {
          [Op.or]: [
            { [Op.like]: '%DECRETOS D.E%' },
            { [Op.like]: '%ORDENANZAS%' },
            { [Op.like]: '%RESOLUCIONES D.E%'}
          ],
        },
      },
    })
    let formattedResponse = []
    if (legTemasDiaria && legTemasDiaria.length > 0) {
      formattedResponse = legTemasDiaria.map((tema:any) => tema.get({ plain: true }));
    }
  
    const tema = await models.leg_temas.findByPk(eidtema);
    if (!tema) {
      return NextResponse.error();
    }

    const whereClause = {
      ...(eidtema && { eidtema }),
      ...(eidsubtema && eidsubtema !== "all" && { eidsubtema }),

    };

    const excludeDate = formattedResponse.some((tema: any) => tema.eidtema === Number(eidtema))

    const attributes = excludeDate
      ? { exclude: ['fecha_ing', 'fecha_normativa'] }
      : undefined; 

    const legislaciones = await models.legislacion.findAll({
      attributes,
      where: whereClause
    });

    return NextResponse.json(legislaciones);
  } catch (error) {
    // Manejo de errores en caso de falla en la consulta
    console.error('Error al obtener los subtemas:', error);
    return NextResponse.error();
  }
}
