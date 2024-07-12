const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notas', {
    eidnota: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
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
    ccopete: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cnota: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cquien: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cdepto: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cfecha_creac: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cfecha_ultmod: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    cactiva: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cfecha_sugpub: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    ctipo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    c_imagen: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    c_imagen640: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    c_imagen800: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    c_imagen1024: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    c_imagen_mayor: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cesquema: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cstatus: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cenv: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    crev: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cpub: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'notas',
    timestamps: false,
    indexes: [
      {
        name: "eidnota",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidnota" },
        ]
      },
      {
        name: "ctitulo",
        using: "BTREE",
        fields: [
          { name: "ctitulo" },
          { name: "cfecha_creac" },
          { name: "ctipo" },
          { name: "cstatus" },
        ]
      },
      {
        name: "crev",
        using: "BTREE",
        fields: [
          { name: "crev" },
          { name: "cpub" },
        ]
      },
      {
        name: "cenv",
        using: "BTREE",
        fields: [
          { name: "cenv" },
        ]
      },
    ]
  });
};
