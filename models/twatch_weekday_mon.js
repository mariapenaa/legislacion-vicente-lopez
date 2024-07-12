const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_weekday_mon', {
    mon: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: ""
    },
    wd: {
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
    tableName: 'twatch_weekday_mon',
    timestamps: false,
    indexes: [
      {
        name: "mon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mon" },
          { name: "wd" },
        ]
      },
    ]
  });
};
