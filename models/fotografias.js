const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fotografias', {
    eidfoto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    ctitulo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    carchivo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    ccategoria: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    carchivobig: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fotografias',
    timestamps: false,
    indexes: [
      {
        name: "eidfoto",
        using: "BTREE",
        fields: [
          { name: "eidfoto" },
        ]
      },
      {
        name: "orden",
        using: "BTREE",
        fields: [
          { name: "orden" },
        ]
      },
    ]
  });
};
