const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_allreadt', {
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
    tableName: 'twatch_allreadt',
    timestamps: false,
    indexes: [
      {
        name: "page",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page" },
        ]
      },
    ]
  });
};
