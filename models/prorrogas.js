const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prorrogas', {
    eidpro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    ctributo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    ccuota: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    dfecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    }
  }, {
    sequelize,
    tableName: 'prorrogas',
    timestamps: false,
    indexes: [
      {
        name: "eidpro",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidpro" },
        ]
      },
      {
        name: "idpro",
        using: "BTREE",
        fields: [
          { name: "eidpro" },
        ]
      },
    ]
  });
};
