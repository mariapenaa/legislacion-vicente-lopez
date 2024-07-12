const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pares_centros', {
    eidpar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    eidcentro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    eidespecial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pares_centros',
    timestamps: false,
    indexes: [
      {
        name: "eidpar",
        using: "BTREE",
        fields: [
          { name: "eidpar" },
        ]
      },
    ]
  });
};
