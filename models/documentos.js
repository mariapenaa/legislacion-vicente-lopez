const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documentos', {
    tipo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    nro_tipo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fecha: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    temas: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    nro_exp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    voces: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_docs: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    c_vinculada: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'documentos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_docs" },
        ]
      },
    ]
  });
};
