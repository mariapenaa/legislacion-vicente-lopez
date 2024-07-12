const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('delegaciones', {
    eidleg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    ctextohtml: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'delegaciones',
    timestamps: false,
    indexes: [
      {
        name: "eidleg",
        using: "BTREE",
        fields: [
          { name: "eidleg" },
        ]
      },
    ]
  });
};
