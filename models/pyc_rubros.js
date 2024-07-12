const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pyc_rubros', {
    eidrubro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    eidcodigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cnombre: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    ctipo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pyc_rubros',
    timestamps: false,
    indexes: [
      {
        name: "eidrubro",
        using: "BTREE",
        fields: [
          { name: "eidrubro" },
          { name: "eidcodigo" },
          { name: "ctipo" },
        ]
      },
    ]
  });
};
