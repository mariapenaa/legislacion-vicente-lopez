const { Sequelize } = require('sequelize');


const isDev = process.env.NODE_ENV === 'development';
console.log(process.env.NODE_ENV)
let sequelize;

if(!isDev){
  sequelize = null;
}
if(isDev){
  sequelize = new Sequelize('mvl', 'root', 'root', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
  });
}

module.exports = sequelize;
