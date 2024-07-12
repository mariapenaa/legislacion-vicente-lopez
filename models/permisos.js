const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permisos', {
    per_usu_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    per_mod_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'permisos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "per_usu_id" },
          { name: "per_mod_id" },
        ]
      },
    ]
  });
};
