const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cvtits', {
    eidcvtit: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    ctitulo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    eidcv: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cuniversidad: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    dfecha_fin: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'cvtits',
    timestamps: false,
    indexes: [
      {
        name: "eidcvtit",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidcvtit" },
        ]
      },
      {
        name: "eidcv",
        using: "BTREE",
        fields: [
          { name: "eidcv" },
        ]
      },
    ]
  });
};
