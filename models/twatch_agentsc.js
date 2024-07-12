const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_agentsc', {
    dt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    agent: {
      type: DataTypes.SMALLINT.UNSIGNED,
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
    tableName: 'twatch_agentsc',
    timestamps: false,
    indexes: [
      {
        name: "dt",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dt" },
          { name: "agent" },
        ]
      },
    ]
  });
};
