const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_errors', {
    dt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    txt: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'twatch_errors',
    timestamps: false,
    indexes: [
      {
        name: "dt",
        using: "BTREE",
        fields: [
          { name: "dt" },
        ]
      },
    ]
  });
};
