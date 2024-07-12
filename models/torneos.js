const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('torneos', {
    eidtorneo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ctitulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    cdescripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cclasif: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cfecha1: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    cfecha2: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    cactivo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cimagen: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'torneos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidtorneo" },
        ]
      },
      {
        name: "cfecha1",
        using: "BTREE",
        fields: [
          { name: "cfecha1" },
          { name: "cfecha2" },
        ]
      },
    ]
  });
};
