const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_usuarios', {
    tipo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    d_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    f_cambio: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_usuarios',
    timestamps: false
  });
};
