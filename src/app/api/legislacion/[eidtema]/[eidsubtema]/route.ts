
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
    /* const tema = await models.leg_temas.findByPk(eidtema);
    if (!tema) {
      return NextResponse.error();
    }
    const legislaciones = await models.legislacion.findAll({
      where: {
        eidtema,
        eidsubtema,
      }
    }); */
    const legislaciones = [
      {
          "eidlegislacion": 44536,
          "ctitulo": "Homologa Convenio Adhesión Policía Prevención Local",
          "fecha_ing": "2018-09-03T18:28:24.000Z",
          "carchivo": "",
          "cnom_archivo": "Ordenanza 33624",
          "eidtema": 17,
          "eidsubtema": 9,
          "pares": "Ordenanza 33624@44536-legOrdenanza 33624 Homologa Convenio Adhesion Policia Prevencion Local e.6451.14.pdf&"
      },
      {
          "eidlegislacion": 44537,
          "ctitulo": "Homologa Convenios Implementación Materia Seguridad Vial Convenio UTN",
          "fecha_ing": "2018-09-03T18:30:02.000Z",
          "carchivo": "",
          "cnom_archivo": "Ordenanza 33620",
          "eidtema": 17,
          "eidsubtema": 9,
          "pares": "Ordenanza 33620@44537-legOrdenanza 33620 Homologa Convenios Implementacion Materia Seguridad Vial Convenio UTN e.5758.12.pdf&"
      },
      {
          "eidlegislacion": 44538,
          "ctitulo": "Homologa Convenio Implementación Sistema Comando Prevención Comunitaria CPC",
          "fecha_ing": "2018-09-03T18:31:11.000Z",
          "carchivo": "",
          "cnom_archivo": "Ordenanza 33623",
          "eidtema": 17,
          "eidsubtema": 9,
          "pares": "Ordenanza 33623@44538-legOrdenanza 33623 Homologa Convenio Implementacion Sistema Comando PRevencion Comunitaria CPC e.6452.14.pdf&"
      },
      {
          "eidlegislacion": 44539,
          "ctitulo": "Seguridad Nación Programa Barrios Seguros",
          "fecha_ing": "2018-09-03T18:32:28.000Z",
          "carchivo": "",
          "cnom_archivo": "Ordenanza 35454",
          "eidtema": 17,
          "eidsubtema": 9,
          "pares": "Ordenanza 35454@44539-legOrdenanza 35454 Homologa Convenio Ministerio de Seguridad Nacion Programa barrios seguros e.4236.17.pdf&"
      },
      {
          "eidlegislacion": 44540,
          "ctitulo": "Emergencia Seguridad Publica Decreto Nacional 228.16 Ley Provincial 14806",
          "fecha_ing": "2018-09-03T18:34:52.000Z",
          "carchivo": "",
          "cnom_archivo": "Ordenanza 34515",
          "eidtema": 17,
          "eidsubtema": 9,
          "pares": "Ordenanza 34515@44540-legOrdenanza 34515 Adherir Decreto Nacional 228.16 Ley Provincial 14806 Emergencia Seguridad Publica e.2053.16.pdf&"
      },
      {
          "eidlegislacion": 44541,
          "ctitulo": "Emergencia en Seguridad Prorroga Ordenanza 34515 Ley 14886",
          "fecha_ing": "2018-09-03T18:41:12.000Z",
          "carchivo": "",
          "cnom_archivo": "Ordenanza 35226",
          "eidtema": 17,
          "eidsubtema": 9,
          "pares": "Ordenanza 35226@44541-legOrdenanza 35226 Declara Emergencia en Seguridad Prorroga Ordenanza 34515 Ley 14886 e.2053.16.pdf&"
      },
      {
          "eidlegislacion": 44542,
          "ctitulo": "Homologa Convenio Colaboración Policía Federal Argentina",
          "fecha_ing": "2018-09-03T18:42:50.000Z",
          "carchivo": "",
          "cnom_archivo": "Ordenanza 35236",
          "eidtema": 17,
          "eidsubtema": 9,
          "pares": "Ordenanza 35236@44542-legOrdenanza 35236 Homologa Convenio colaboracion Policia Federal Argentina Yrigoyen 4848 e.936.17.pdf&"
      },
      {
          "eidlegislacion": 44543,
          "ctitulo": "Emergencia Infraestructura Habitat Vivienda y Servicios Públicos",
          "fecha_ing": "2018-09-03T18:44:13.000Z",
          "carchivo": "",
          "cnom_archivo": "Ordenanza 34531",
          "eidtema": 17,
          "eidsubtema": 9,
          "pares": "Ordenanza 34531@44543-legOrdenanza 34531 Adhesion Ley 14812 Emergencia Infraestructura Habitat Vivienda y Servicios Publicos e.1985.16.pdf&"
      }
  ]
    return NextResponse.json(legislaciones);
  } catch (error) {
    // Manejo de errores en caso de falla en la consulta
    console.error('Error al obtener los subtemas:', error);
    return NextResponse.error();
  }
}
