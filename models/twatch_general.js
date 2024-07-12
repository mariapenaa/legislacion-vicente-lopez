const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_general', {
    field: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    value: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'twatch_general',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "field" },
        ]
      },
    ]
  });
};
