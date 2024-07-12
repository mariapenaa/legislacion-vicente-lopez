const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_ips', {
    dt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ip: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    last: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    proxy: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: ""
    },
    proxyresolved: {
      type: DataTypes.CHAR(60),
      allowNull: false,
      defaultValue: ""
    },
    proxycou: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    agent: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    robot: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    resolved: {
      type: DataTypes.CHAR(60),
      allowNull: false,
      defaultValue: ""
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'twatch_ips',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ip" },
          { name: "dt" },
        ]
      },
    ]
  });
};
