const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_ipcou', {
    ipfrom: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    ipto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'twatch_ipcou',
    timestamps: false,
    indexes: [
      {
        name: "ipto",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ipto" },
        ]
      },
    ]
  });
};
