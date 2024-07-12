const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('20180824_leg_subtemas', {
    eidsubtema: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    tableName: '20180824_leg_subtemas',
    timestamps: false
  });
};
