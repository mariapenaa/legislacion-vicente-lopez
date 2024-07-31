// pages/api/temas.js

import { NextResponse } from 'next/server';
import sequelize from '../../../../config/database';
import initModels from '../../../../models/init-models';

console.log('process env')
console.log(process.env.NODE_ENV)
console.log('there is sequelize', sequelize)
if (!sequelize) {
    throw new Error('Database connection is not initialized.');
  }

const models = initModels(sequelize);

export async function GET() {
  try {
    console.log(process.env.NODE_ENV)
    console.log('there is sequelize', sequelize)
    const temas = await models.leg_temas.findAll();
    return NextResponse.json(temas);
  } catch (error) {
    console.error('Error fetching temas:', error);
    return NextResponse.error();
  }
}
