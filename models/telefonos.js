const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefonos', {
    eidtel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    ctextohtml: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    categoria: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'telefonos',
    timestamps: false,
    indexes: [
      {
        name: "eidtel",
        using: "BTREE",
        fields: [
          { name: "eidtel" },
        ]
      },
      {
        name: "categoria",
        using: "BTREE",
        fields: [
          { name: "categoria" },
        ]
      },
    ]
  });
};
