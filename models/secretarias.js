const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('secretarias', {
    eidsecretaria: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    cnombresec: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cemail: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'secretarias',
    timestamps: false,
    indexes: [
      {
        name: "eidsecretaria",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidsecretaria" },
        ]
      },
      {
        name: "cnombre",
        using: "BTREE",
        fields: [
          { name: "cnombresec" },
        ]
      },
    ]
  });
};
