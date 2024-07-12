const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_sessions_mon', {
    mon: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'twatch_sessions_mon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mon" },
        ]
      },
    ]
  });
};
