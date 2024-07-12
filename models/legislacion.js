const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('legislacion', {
    eidlegislacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ctitulo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    fecha_ing: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
    tableName: 'legislacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidlegislacion" },
        ]
      },
    ]
  });
};
