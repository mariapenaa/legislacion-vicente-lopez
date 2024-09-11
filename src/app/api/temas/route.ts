// pages/api/temas.js

import { NextResponse } from 'next/server';
import sequelize from '../../../../config/database';
import initModels from '../../../../models/init-models';

if (!sequelize) {
    throw new Error('Database connection is not initialized.');
  }

const models = initModels(sequelize);
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const temas = await models.leg_temas.findAll({
      order: [
        [sequelize.fn('TRIM', sequelize.col('ctema')), 'ASC']
      ]
    });
    return NextResponse.json(temas);
  } catch (error) {
    console.error('Error fetching temas:', error);
    return NextResponse.error();
  }
}
