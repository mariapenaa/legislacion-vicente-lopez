const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comisarias', {
    eidcomisaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    clocalidad: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    cdependencia: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    cdireccion: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    ctelefono: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'comisarias',
    timestamps: false,
    indexes: [
      {
        name: "eidcomisaria",
        using: "BTREE",
        fields: [
          { name: "eidcomisaria" },
          { name: "clocalidad" },
        ]
      },
    ]
  });
};
