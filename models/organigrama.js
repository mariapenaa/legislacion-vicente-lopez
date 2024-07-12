const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organigrama', {
    eidorg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    eidsecretaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ccargo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    cdirectivo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'organigrama',
    timestamps: false,
    indexes: [
      {
        name: "eidorg",
        using: "BTREE",
        fields: [
          { name: "eidorg" },
          { name: "eidsecretaria" },
        ]
      },
      {
        name: "orden",
        using: "BTREE",
        fields: [
          { name: "orden" },
        ]
      },
    ]
  });
};
