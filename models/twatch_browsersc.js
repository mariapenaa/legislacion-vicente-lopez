const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_browsersc', {
    dt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    browser: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'twatch_browsersc',
    timestamps: false,
    indexes: [
      {
        name: "dt",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dt" },
          { name: "browser" },
        ]
      },
    ]
  });
};
