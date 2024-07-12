const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tram_temas', {
    eidtema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    ctema: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'tram_temas',
    timestamps: false,
    indexes: [
      {
        name: "eidtema",
        using: "BTREE",
        fields: [
          { name: "eidtema" },
        ]
      },
    ]
  });
};
