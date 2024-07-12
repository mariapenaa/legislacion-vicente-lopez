const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patentes', {
    c_dominio_actual: {
      type: DataTypes.CHAR(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patentes',
    timestamps: false
  });
};
