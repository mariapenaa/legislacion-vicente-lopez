const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_refsc_mon', {
    mon: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: ""
    },
    ref: {
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
    tableName: 'twatch_refsc_mon',
    timestamps: false,
    indexes: [
      {
        name: "mon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mon" },
          { name: "ref" },
        ]
      },
    ]
  });
};
