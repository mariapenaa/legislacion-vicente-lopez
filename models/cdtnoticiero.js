const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdtnoticiero', {
    eidnota: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    ctextohtml: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cdtnoticiero',
    timestamps: false,
    indexes: [
      {
        name: "eidnota",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidnota" },
        ]
      },
    ]
  });
};
