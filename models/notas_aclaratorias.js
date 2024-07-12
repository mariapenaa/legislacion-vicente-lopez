const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notas_aclaratorias', {
    eidnota: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    eidlic: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cfile: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cstatus: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'notas_aclaratorias',
    timestamps: false,
    indexes: [
      {
        name: "eidnota",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidnota" },
        ]
      },
      {
        name: "cfile",
        using: "BTREE",
        fields: [
          { name: "cfile" },
          { name: "cstatus" },
        ]
      },
    ]
  });
};
