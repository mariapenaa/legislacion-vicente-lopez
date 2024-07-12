const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calendario', {
    eidcal: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    eidcat: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    eidsec: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    eidlugar: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    ctitulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    csubtitulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ctexto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cimagen: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    dfecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    dfecha2: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    cactivo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    ctipo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'calendario',
    timestamps: false,
    indexes: [
      {
        name: "eidcal",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidcal" },
        ]
      },
      {
        name: "eidcat",
        using: "BTREE",
        fields: [
          { name: "eidcat" },
          { name: "eidsec" },
          { name: "eidlugar" },
          { name: "dfecha" },
          { name: "cactivo" },
          { name: "ctipo" },
        ]
      },
    ]
  });
};
