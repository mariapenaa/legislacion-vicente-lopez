const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pyc_eventos', {
    eideventos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    ctitulo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    csubtitulo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    cdescripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    carchivo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    cmostrar: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pyc_eventos',
    timestamps: false,
    indexes: [
      {
        name: "eideventos",
        using: "BTREE",
        fields: [
          { name: "eideventos" },
        ]
      },
      {
        name: "fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
    ]
  });
};
