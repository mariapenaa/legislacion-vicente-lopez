const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leg_act_adm_rel', {
    eidlegactrel: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    eidtipo_act: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    leg_numrel: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    leg_relanio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    eidlegislacion: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'leg_act_adm_rel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidlegactrel" },
        ]
      },
    ]
  });
};
