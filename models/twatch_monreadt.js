const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_monreadt', {
    mon: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: ""
    },
    page: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    avgtime: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    avgc: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'twatch_monreadt',
    timestamps: false,
    indexes: [
      {
        name: "mon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mon" },
          { name: "page" },
        ]
      },
    ]
  });
};
