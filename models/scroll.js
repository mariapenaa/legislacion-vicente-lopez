const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scroll', {
    eidscroll: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey:true
    },
    ctext: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cactive: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scroll',
    timestamps: false,
    indexes: [
      {
        name: "eidscroll",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eidscroll" },
        ]
      },
    ]
  });
};
