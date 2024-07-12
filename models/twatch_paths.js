const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_paths', {
    yweak: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: ""
    },
    p1: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    p2: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    p3: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    p4: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    p5: {
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
    tableName: 'twatch_paths',
    timestamps: false,
    indexes: [
      {
        name: "yweak",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "yweak" },
          { name: "p1" },
          { name: "p2" },
          { name: "p3" },
          { name: "p4" },
          { name: "p5" },
        ]
      },
    ]
  });
};
