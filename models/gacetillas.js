const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacetillas', {
    eidgacet: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    enumero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cdia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cmes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    canio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ctitulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ctexto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cactive: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'gacetillas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidgacet" },
          { name: "cmes" },
        ]
      },
      {
        name: "enumero",
        using: "BTREE",
        fields: [
          { name: "enumero" },
        ]
      },
      {
        name: "canio",
        using: "BTREE",
        fields: [
          { name: "canio" },
        ]
      },
      {
        name: "cmes",
        using: "BTREE",
        fields: [
          { name: "cmes" },
        ]
      },
      {
        name: "cdia",
        using: "BTREE",
        fields: [
          { name: "cdia" },
        ]
      },
    ]
  });
};
