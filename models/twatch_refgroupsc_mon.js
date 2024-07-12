const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_refgroupsc_mon', {
    mon: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    domain: {
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
    tableName: 'twatch_refgroupsc_mon',
    timestamps: false,
    indexes: [
      {
        name: "mon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mon" },
          { name: "type" },
          { name: "domain" },
        ]
      },
    ]
  });
};
