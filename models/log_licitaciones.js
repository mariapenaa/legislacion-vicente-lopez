const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_licitaciones', {
    eidloglic: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    eidusuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    eidlic: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    ctexto_email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'log_licitaciones',
    timestamps: false,
    indexes: [
      {
        name: "eidloglic",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidloglic" },
        ]
      },
      {
        name: "eidusuario",
        using: "BTREE",
        fields: [
          { name: "eidusuario" },
          { name: "eidlic" },
          { name: "fecha" },
        ]
      },
    ]
  });
};
