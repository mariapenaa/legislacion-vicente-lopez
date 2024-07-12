const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtelefonos', {
    eidtel: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    eidcat: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cdescripcion: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ctelefonos: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'dtelefonos',
    timestamps: false,
    indexes: [
      {
        name: "eidtel",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidtel" },
        ]
      },
    ]
  });
};
