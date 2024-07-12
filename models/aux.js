const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aux', {
    actual: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    original: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cuenta: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aux',
    timestamps: false
  });
};
