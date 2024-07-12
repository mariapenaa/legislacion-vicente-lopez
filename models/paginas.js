const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paginas', {
    eidpagina: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    ctitle: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cbody: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cdir: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cpag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'paginas',
    timestamps: false,
    indexes: [
      {
        name: "eidpagina",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidpagina" },
        ]
      },
    ]
  });
};
