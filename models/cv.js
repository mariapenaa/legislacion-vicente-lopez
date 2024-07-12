const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cv', {
    eidcv: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    cnacionalidad: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    clegajo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    capellido: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    cnombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    ccargo: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    cinstituto: {
      type: DataTypes.STRING(240),
      allowNull: false,
      defaultValue: ""
    },
    dfecha: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    ctelefono: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    cemail: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    tadic1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tadic2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tadic3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tadic4: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tadic5: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tadic6: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cfoto: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    cstatus: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cpass: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'cv',
    timestamps: false,
    indexes: [
      {
        name: "eidcv",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidcv" },
        ]
      },
      {
        name: "capellido",
        using: "BTREE",
        fields: [
          { name: "capellido" },
          { name: "cstatus" },
        ]
      },
      {
        name: "clegajo",
        using: "BTREE",
        fields: [
          { name: "clegajo" },
        ]
      },
    ]
  });
};
