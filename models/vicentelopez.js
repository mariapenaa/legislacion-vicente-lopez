const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vicentelopez', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    domicilio: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notificacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    imagen1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    imagen2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    imagen3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idunica: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    confirmado: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    fechapedido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaconfirmado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    latitud: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "0"
    },
    longitud: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "0"
    },
    observaciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expediente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    aprobado: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    motivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vicentelopez',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
