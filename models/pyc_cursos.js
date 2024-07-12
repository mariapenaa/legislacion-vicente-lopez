const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pyc_cursos', {
    eidcurso: {
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
    ctipo: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    finicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    ffin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    fcierre: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    cvacantes: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: ""
    },
    cdetalle: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cestado: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pyc_cursos',
    timestamps: false,
    indexes: [
      {
        name: "eidcurso",
        using: "BTREE",
        fields: [
          { name: "eidcurso" },
          { name: "ctitulo" },
          { name: "ctipo" },
          { name: "finicio" },
        ]
      },
    ]
  });
};
