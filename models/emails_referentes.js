const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emails_referentes', {
    eidemail: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    cemail: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    csector: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    cdescripcion: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'emails_referentes',
    timestamps: false,
    indexes: [
      {
        name: "eidemail",
        using: "BTREE",
        fields: [
          { name: "eidemail" },
          { name: "csector" },
        ]
      },
    ]
  });
};
