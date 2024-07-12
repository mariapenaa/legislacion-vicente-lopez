const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mvl', 'root', 'root', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});

module.exports = sequelize;
