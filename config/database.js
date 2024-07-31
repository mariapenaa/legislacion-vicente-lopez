const { Sequelize } = require('sequelize');
require('dotenv').config();

const isDev = process.env.NODE_ENV === 'development';

let sequelize = new Sequelize('mvl', 'root', 'root', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});

if(isDev){
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      dialect: 'mysql',
      dialectModule: require('mysql2'),
    });
}

module.exports = sequelize;
