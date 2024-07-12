const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recibos_emi_com', {
    c_sistema: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_transac: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_comprob: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    c_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_tasa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_cuota: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    f_pago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    f_prim_vto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    f_seg_vto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    i_deuda: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    i_rec_prim_vto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    i_rec_seg_vto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    n_emision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'recibos_emi_com',
    timestamps: false,
    indexes: [
      {
        name: "c_cuenta",
        using: "BTREE",
        fields: [
          { name: "c_cuenta" },
        ]
      },
      {
        name: "n_ano",
        using: "BTREE",
        fields: [
          { name: "n_ano" },
        ]
      },
      {
        name: "n_cuota",
        using: "BTREE",
        fields: [
          { name: "n_cuota" },
        ]
      },
    ]
  });
};
