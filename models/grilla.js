const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grilla', {
    eidgrilla: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    eidnota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cpos: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    dfecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    }
  }, {
    sequelize,
    tableName: 'grilla',
    timestamps: false,
    indexes: [
      {
        name: "eidgrilla",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidgrilla" },
        ]
      },
      {
        name: "dfecha",
        using: "BTREE",
        fields: [
          { name: "dfecha" },
        ]
      },
      {
        name: "eidnota",
        using: "BTREE",
        fields: [
          { name: "eidnota" },
        ]
      },
    ]
  });
};
