const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pyp2005', {
    cuenta: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    tasa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    ano: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    cuota: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    sistema: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vencimiento1: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    vencimiento2: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    importe: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    razon_social: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cuil: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    calle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nro: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "0"
    },
    localidad: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    ingreso_brutos: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pyp2005',
    timestamps: false
  });
};
