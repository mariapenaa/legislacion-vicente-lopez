const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_usu_web', {
    tipo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    d_usuario: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    c_dni: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    n_dni: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    f_cambio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'log_usu_web',
    timestamps: false
  });
};
