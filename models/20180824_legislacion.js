const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('20180824_legislacion', {
    eidlegislacion: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    ctitulo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    fecha_ing: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    carchivo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cnom_archivo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    eidtema: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    eidsubtema: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pares: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: '20180824_legislacion',
    timestamps: false
  });
};
