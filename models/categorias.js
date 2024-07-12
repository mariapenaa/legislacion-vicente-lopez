const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorias', {
    eidcat: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    cdesc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'categorias',
    timestamps: false,
    indexes: [
      {
        name: "eidcat",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidcat" },
        ]
      },
      {
        name: "cdesc",
        using: "BTREE",
        fields: [
          { name: "cdesc" },
        ]
      },
    ]
  });
};
