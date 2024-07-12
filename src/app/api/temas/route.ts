// pages/api/temas.js

import { NextResponse } from 'next/server';
import sequelize from '../../../../config/database';
import initModels from '../../../../models/init-models';

const models = initModels(sequelize); // Initialize Sequelize models

export async function GET() {
  try {
    const temas = await models.leg_temas.findAll();
    return NextResponse.json(temas);
  } catch (error) {
    console.error('Error fetching temas:', error);
    return NextResponse.error();
  }
}
