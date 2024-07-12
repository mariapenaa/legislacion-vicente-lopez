const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tramites', {
    eidtramite: {
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
    fecha_ing: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    eidsecretaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    eidtema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    eidsubtema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    clugar: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pares: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    legislacion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tramites',
    timestamps: false,
    indexes: [
      {
        name: "eidtramite",
        using: "BTREE",
        fields: [
          { name: "eidtramite" },
          { name: "eidtema" },
          { name: "eidsubtema" },
        ]
      },
    ]
  });
};
