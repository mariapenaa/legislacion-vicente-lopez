const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modulos', {
    mod_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    mod_url: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    mod_descrip: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    mod_usu_level: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    idunico: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'modulos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idunico" },
        ]
      },
    ]
  });
};
