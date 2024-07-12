const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tram_subtemas', {
    eidsubtema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    csubtema: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
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
    tableName: 'tram_subtemas',
    timestamps: false,
    indexes: [
      {
        name: "eidsubtema",
        using: "BTREE",
        fields: [
          { name: "eidsubtema" },
          { name: "eidtema" },
        ]
      },
    ]
  });
};
