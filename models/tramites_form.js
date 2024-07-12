const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tramites_form', {
    eidform: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    eidtramite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    carchivo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    cnom_archivo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'tramites_form',
    timestamps: false,
    indexes: [
      {
        name: "eidform",
        using: "BTREE",
        fields: [
          { name: "eidform" },
          { name: "eidtramite" },
        ]
      },
    ]
  });
};
