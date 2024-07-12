const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centros_salud', {
    eidcentro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    cnombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    clink: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    ctipo: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    czona: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    cjefe1: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    cjefe2: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    chorario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ctransporte: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cdireccion: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ctelefono: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    cplano: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'centros_salud',
    timestamps: false,
    indexes: [
      {
        name: "eidcentro",
        using: "BTREE",
        fields: [
          { name: "eidcentro" },
        ]
      },
    ]
  });
};
