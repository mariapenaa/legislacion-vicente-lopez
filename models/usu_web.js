const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usu_web', {
    tipo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    d_usuario: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    mail: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'usu_web',
    timestamps: false,
    indexes: [
      {
        name: "Index_1",
        using: "BTREE",
        fields: [
          { name: "tipo" },
          { name: "d_usuario" },
        ]
      },
    ]
  });
};
