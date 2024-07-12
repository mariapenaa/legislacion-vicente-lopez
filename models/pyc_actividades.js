const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pyc_actividades', {
    eidactividad: {
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
    cdescripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    carchivo: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    finicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    fvto: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    cmostrar: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pyc_actividades',
    timestamps: false,
    indexes: [
      {
        name: "eidactividad",
        using: "BTREE",
        fields: [
          { name: "eidactividad" },
          { name: "ctitulo" },
          { name: "finicio" },
          { name: "cmostrar" },
        ]
      },
    ]
  });
};
