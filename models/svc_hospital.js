const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('svc_hospital', {
    eid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    servicio: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    jefe: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'svc_hospital',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eid" },
        ]
      },
    ]
  });
};
