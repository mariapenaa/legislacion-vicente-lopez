const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('administradores', {
    eidadmin: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    cusuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    cclave: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    eidsecretaria: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    capellido: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    cnombres: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    cemail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cadmcom: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cadmdef: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    cadmtra: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'administradores',
    timestamps: false,
    indexes: [
      {
        name: "eidadmin",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidadmin" },
        ]
      },
      {
        name: "cusuario",
        using: "BTREE",
        fields: [
          { name: "cusuario" },
          { name: "eidsecretaria" },
          { name: "capellido" },
          { name: "cnombres" },
        ]
      },
    ]
  });
};
