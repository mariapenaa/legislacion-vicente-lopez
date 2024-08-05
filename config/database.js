const { Sequelize } = require('sequelize');
require('dotenv').config();

const isDev = process.env.NODE_ENV === 'development';

// Set up Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME || 'mvl',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: isDev, // Enable logging in development
  }
);

module.exports = sequelize;
