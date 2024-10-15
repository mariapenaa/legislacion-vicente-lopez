
// Importa los modelos necesarios y Sequelize si es necesario
import initModels from '../../../../../models/init-models';// Ajusta la importación según tu estructura de archivos y modelos
import sequelize from '../../../../../config/database';
import { NextResponse } from 'next/server';
import { Op, Sequelize } from 'sequelize';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; 

dayjs.extend(utc)

if (!sequelize) {
  throw new Error('Database connection is not initialized.');
}

const models = initModels(sequelize);


type Params = {
    nombre: string,
}
 
  
export async function GET(req: Request, context: { params: Params }) {
  const { searchParams } = new URL(req.url);
  const eidtema = searchParams.get('tema')
  const eidsubtema = searchParams.get('subtema')
  const type = searchParams.get('type')
  const fechaInicio = searchParams.get('fechaInicio')
  const fechaFin = searchParams.get('fechaFin')
  const nombre = searchParams.get('nombre')

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
    const whereClause = {
      ...(nombre && { 
        [Op.or]: [
          { ctitulo: { [Op.like]: `%${nombre}%` } },
          { cnom_archivo: { [Op.like]: `%${nombre}%` } }
        ]
      }),
      ...(eidtema && { eidtema }),
      ...(eidsubtema && eidsubtema !== "all" && { eidsubtema }),
      ...((fechaInicio && fechaFin) && {
        fecha_normativa: {
          [Op.between]: [
            dayjs(fechaInicio).utcOffset(0).startOf('day').toDate(),
            dayjs(fechaFin).utcOffset(0).endOf('day').toDate()
          ]
          }
      })
    };

    const excludeDate = eidtema ? formattedResponse.some((tema: any) => tema.eidtema === Number(eidtema)) : false

    const attributes = excludeDate
      ? { exclude: ['fecha_ing', 'fecha_normativa'] }
      : undefined; 

    let legislaciones = await models.legislacion.findAll({
      attributes,
      where: whereClause,
    });

    // Si la búsqueda es solo por nombre, aseguramos que se devuelvan solo los de reglamentario
    if (!eidtema && type === 'digesto-digital') {
      // Aquí, filtramos para excluir los temas de legislaciones que están en formattedResponse
      legislaciones = legislaciones.filter(
        (leg: any) => !formattedResponse.some((tema: any) => tema.eidtema === Number(leg.eidtema))
      );
    }

    if (!eidtema && type === 'legislacion') {
      // Aquí, filtramos para incluir solo los temas de legislaciones que están en formattedResponse
      legislaciones = legislaciones.filter(
        (leg: any) => formattedResponse.some((tema: any) => tema.eidtema === Number(leg.eidtema))
      );
    }

    
    return NextResponse.json(legislaciones);
  } catch (error) {
    // Manejo de errores en caso de falla en la consulta
    console.error('Error al obtener las legislaciones:', error);
    return NextResponse.error();
  }
}
