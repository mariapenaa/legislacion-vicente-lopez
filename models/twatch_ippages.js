const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_ippages', {
    dt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ip: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: ""
    },
    ord: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    page: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    pagedt: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'twatch_ippages',
    timestamps: false,
    indexes: [
      {
        name: "dt",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dt" },
          { name: "ip" },
          { name: "ord" },
        ]
      },
    ]
  });
};
