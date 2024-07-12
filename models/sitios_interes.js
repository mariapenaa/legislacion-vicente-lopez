const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sitios_interes', {
    eidlink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    cdireccion: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    cnombre: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'sitios_interes',
    timestamps: false,
    indexes: [
      {
        name: "eidlink",
        using: "BTREE",
        fields: [
          { name: "eidlink" },
          { name: "cnombre" },
        ]
      },
    ]
  });
};
