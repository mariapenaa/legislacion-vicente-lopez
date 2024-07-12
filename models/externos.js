const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('externos', {
    c_externo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_reparto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_calle_pro: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    n_nro_pro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_cta_esp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_verificador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_calle_tit: {
      type: DataTypes.CHAR(34),
      allowNull: true
    },
    n_nro_tit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_piso_tit: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    c_dpto_tit: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    d_loc_tit: {
      type: DataTypes.CHAR(24),
      allowNull: true
    },
    d_apellido: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    d_nombre: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    c_postal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_circ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_seccion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    n_fraccion: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    n_manz: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_lmanz: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    n_parc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_lparc: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    n_ufun: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    d_lufun: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    n_poli: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    n_valua: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    n_alum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_cate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_partida: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_frente: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true
    },
    n_superf: {
      type: DataTypes.DECIMAL(9,3),
      allowNull: true
    },
    n_pluvial_lat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_eximido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_eximido: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true
    },
    s_ubicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_circ_tit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_seccion_tit: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    n_fraccion_tit: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    n_manz_tit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_lmanz_tit: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    n_parc_tit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_lparc_tit: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    n_ufun_tit: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    d_lufun_tit: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    n_poli_tit: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    s_deuda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_secuencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    f_proceso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    s_debito: {
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
    tableName: 'externos',
    timestamps: false,
    indexes: [
      {
        name: "n_emision",
        using: "BTREE",
        fields: [
          { name: "n_emision" },
        ]
      },
      {
        name: "cuenta",
        using: "BTREE",
        fields: [
          { name: "c_cuenta" },
        ]
      },
    ]
  });
};
