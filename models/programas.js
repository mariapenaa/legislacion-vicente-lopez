const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programas', {
    eidprograma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    cdependencia: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    cperiodo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cdescripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'programas',
    timestamps: false,
    indexes: [
      {
        name: "eidprograma",
        using: "BTREE",
        fields: [
          { name: "eidprograma" },
        ]
      },
    ]
  });
};
