const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pyc_links', {
    eidlink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    cdireccion: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    cdescripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cnombre: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pyc_links',
    timestamps: false,
    indexes: [
      {
        name: "eidlink",
        using: "BTREE",
        fields: [
          { name: "eidlink" },
          { name: "cnombre" },
        ]
      },
    ]
  });
};
