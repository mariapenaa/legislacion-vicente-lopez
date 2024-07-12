const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lugares', {
    eidlugar: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    cdesc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cdir: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ctel: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cemail: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'lugares',
    timestamps: false,
    indexes: [
      {
        name: "eidlugar",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidlugar" },
        ]
      },
      {
        name: "cdesc",
        using: "BTREE",
        fields: [
          { name: "cdesc" },
        ]
      },
    ]
  });
};
