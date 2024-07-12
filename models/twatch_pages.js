const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twatch_pages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    page: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "page"
    }
  }, {
    sequelize,
    tableName: 'twatch_pages',
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
