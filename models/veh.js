const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('veh', {
    dominio_actual: {
      type: DataTypes.STRING(6),
      allowNull: true
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
    vencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    codigo: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    modelo_ano: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    categoria: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(50),
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
    importe: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    sistema: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    cuenta: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    dominio_original: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    c_tasa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'veh',
    timestamps: false
  });
};
