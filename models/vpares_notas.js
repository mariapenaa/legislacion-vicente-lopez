const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vpares_notas', {
    eidnota: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    vpares: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vpares_notas',
    timestamps: false,
    indexes: [
      {
        name: "eidnota",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidnota" },
        ]
      },
    ]
  });
};
