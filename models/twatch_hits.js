const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_hits', {
    dt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'twatch_hits',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dt" },
        ]
      },
    ]
  });
};
