const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fechas', {
    eidcal: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    dfechainic: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    dfechafin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    }
  }, {
    sequelize,
    tableName: 'fechas',
    timestamps: false,
    indexes: [
      {
        name: "eidcal",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidcal" },
        ]
      },
      {
        name: "dfechainic",
        using: "BTREE",
        fields: [
          { name: "dfechainic" },
          { name: "dfechafin" },
        ]
      },
    ]
  });
};
