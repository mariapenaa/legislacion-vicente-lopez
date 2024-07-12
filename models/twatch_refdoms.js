const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_refdoms', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    domain: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      unique: "domain"
    }
  }, {
    sequelize,
    tableName: 'twatch_refdoms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "domain",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
};
