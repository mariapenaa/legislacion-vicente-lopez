const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leg_temas_old', {
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
    tableName: 'leg_temas_old',
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
