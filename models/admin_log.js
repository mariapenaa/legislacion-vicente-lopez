const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_log', {
    eidlog: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "00:00:00"
    },
    usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    operacion: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'admin_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidlog" },
        ]
      },
    ]
  });
};
