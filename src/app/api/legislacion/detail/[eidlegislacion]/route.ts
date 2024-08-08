// Importa los modelos necesarios y Sequelize si es necesario
import initModels from '../../../../../../models/init-models';// Ajusta la importación según tu estructura de archivos y modelos
import sequelize from '../../../../../../config/database';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

if (!sequelize) {
  throw new Error('Database connection is not initialized.');
}

const models = initModels(sequelize);

type Params = {
    eidlegislacion: string
}

function extractFileName(input: string) {
  const start = input.indexOf('@') + 1;  // Find the position after '@'
  const end = input.indexOf('.pdf') + 4; // Find the position after '.pdf'
  return input.slice(start, end);  // Extract the substring from start to end
}

export async function GET(request: Request, context: { params: Params }) {
  const { eidlegislacion } = context.params

  try {
    const legislacion = await models.legislacion.findByPk(eidlegislacion);
    if (!legislacion) {
        return NextResponse.error();
    }
    const directoryPath = '/mnt/pdf';

    // Read all files in the directory
    /* const files = fs.readdirSync(directoryPath);

    const matchingFiles = files.filter(file => file.includes(legislacion.cnom_archivo));
    console.log('matching files', matchingFiles)
    if (matchingFiles.length > 0) {
      const fileName = matchingFiles[0]; // Assume the first matching file is the one you want
      const filePath = path.join(directoryPath, fileName);

      const normalizedFilePath = path.normalize(filePath);

      if (fs.existsSync(normalizedFilePath)) {
        const fileBuffer = fs.readFileSync(normalizedFilePath);
        return new NextResponse(fileBuffer, {
          status: 200,
          headers: { 'Content-Type': 'application/pdf' },
        });
      }
    } */

    // Define the file name and path
    const { pares } = legislacion;
    const fileName = extractFileName(pares)
    const filePath = path.join(directoryPath, fileName);
    const normalizedFilePath = path.normalize(filePath);

    if (fs.existsSync(normalizedFilePath)) {
      const fileBuffer = fs.readFileSync(normalizedFilePath);
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `inline; filename="${fileName}"`
        },
      });
    } else {
      return new NextResponse('File not found', { status: 404 });
    }

  } catch (error) {
    // Manejo de errores en caso de falla en la consulta
    console.error('Error al obtener la legislacion:', error);
    return NextResponse.error();
  }
}
