const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leg_subtemas', {
    eidsubtema: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    csubtema: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    eidtema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cdescripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'leg_subtemas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidsubtema" },
          { name: "csubtema" },
        ]
      },
    ]
  });
};
