const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licitacionesBCKUltimo', {
    eidlicitacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    cnro: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    ctipo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    csector: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    eid_solic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ctitulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cdetalle: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cenviada: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    crevisada: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cpublicada: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    pares: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    archivo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'licitacionesBCKUltimo',
    timestamps: false,
    indexes: [
      {
        name: "eidlicitacion",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidlicitacion" },
        ]
      },
      {
        name: "cnro",
        using: "BTREE",
        fields: [
          { name: "cnro" },
          { name: "ctipo" },
          { name: "csector" },
          { name: "ctitulo" },
        ]
      },
      {
        name: "cenviada",
        using: "BTREE",
        fields: [
          { name: "cenviada" },
        ]
      },
      {
        name: "archivo",
        using: "BTREE",
        fields: [
          { name: "archivo" },
        ]
      },
    ]
  });
};
