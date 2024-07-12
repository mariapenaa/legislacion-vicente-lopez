const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    usu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    usu_baja: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    usu_nick: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    usu_email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    usu_nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    usu_password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    usu_nivel: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    usu_apellido: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usu_id" },
        ]
      },
    ]
  });
};
