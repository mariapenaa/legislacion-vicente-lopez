const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('legislacion_old', {
    eidlegislacion: {
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
    carchivo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    cnom_archivo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
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
    pares: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'legislacion_old',
    timestamps: false,
    indexes: [
      {
        name: "eidlegislacion",
        using: "BTREE",
        fields: [
          { name: "eidlegislacion" },
          { name: "eidtema" },
        ]
      },
    ]
  });
};
