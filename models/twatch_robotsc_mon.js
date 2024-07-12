const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_robotsc_mon', {
    mon: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: ""
    },
    robot: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    page: {
      type: DataTypes.INTEGER.UNSIGNED,
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
    tableName: 'twatch_robotsc_mon',
    timestamps: false,
    indexes: [
      {
        name: "mon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mon" },
          { name: "robot" },
          { name: "page" },
        ]
      },
    ]
  });
};
