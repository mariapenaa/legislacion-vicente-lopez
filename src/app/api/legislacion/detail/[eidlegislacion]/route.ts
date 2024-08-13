import initModels from '../../../../../../models/init-models';
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

    // Define the file name and path
    const { pares } = legislacion;
    const fileName = extractFileName(pares)
    const filePath = path.join(directoryPath, fileName);
    const normalizedFilePath = path.normalize(filePath);

    let fileBuffer = null;
    if (fs.existsSync(normalizedFilePath)) {
      fileBuffer = fs.readFileSync(normalizedFilePath);
    }

    return new NextResponse(JSON.stringify({
      pdfUrl: fileBuffer ? `data:application/pdf;base64,${fileBuffer.toString('base64')}` : null,
      legislacion,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    // Error handling
    console.error('Error retrieving legislacion:', error);
    return NextResponse.error();
  }
}
