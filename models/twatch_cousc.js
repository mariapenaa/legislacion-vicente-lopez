const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_cousc', {
    dt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'twatch_cousc',
    timestamps: false,
    indexes: [
      {
        name: "dt",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dt" },
          { name: "country" },
        ]
      },
    ]
  });
};
