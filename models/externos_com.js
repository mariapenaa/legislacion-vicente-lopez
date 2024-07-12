const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('externos_com', {
    n_reparto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    n_orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    c_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    n_ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_chequera: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: false,
      defaultValue: 0
    },
    d_calle: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: ""
    },
    d_localidad: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: ""
    },
    d_razon_social: {
      type: DataTypes.CHAR(25),
      allowNull: false,
      defaultValue: ""
    },
    c_postal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    n_nro_pro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_emision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'externos_com',
    timestamps: false,
    indexes: [
      {
        name: "ccuenta",
        using: "BTREE",
        fields: [
          { name: "c_cuenta" },
        ]
      },
      {
        name: "n_emision",
        using: "BTREE",
        fields: [
          { name: "n_emision" },
        ]
      },
    ]
  });
};
