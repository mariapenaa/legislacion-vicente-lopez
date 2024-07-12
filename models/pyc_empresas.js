const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pyc_empresas', {
    eidempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    crazon: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    ccuit: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    cnombre: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    eidcodigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ctipo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cdireccion: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    clocalidad: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    ctelefono: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    csitio: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cemail: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    ccontacto: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    ccargo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    ccoment1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ccoment2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cmostrar: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cexportar: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pyc_empresas',
    timestamps: false,
    indexes: [
      {
        name: "eidempresa",
        using: "BTREE",
        fields: [
          { name: "eidempresa" },
          { name: "crazon" },
          { name: "eidcodigo" },
        ]
      },
      {
        name: "ctipo",
        using: "BTREE",
        fields: [
          { name: "ctipo" },
        ]
      },
      {
        name: "clocalidad",
        using: "BTREE",
        fields: [
          { name: "clocalidad" },
        ]
      },
    ]
  });
};
