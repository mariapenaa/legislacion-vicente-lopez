const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aperturasBCK', {
    eidapertura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    eidlicitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ctitulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    dfecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    chorario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    cdescripcion: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'aperturasBCK',
    timestamps: false,
    indexes: [
      {
        name: "eidapertura",
        using: "BTREE",
        fields: [
          { name: "eidapertura" },
        ]
      },
      {
        name: "eidlicitacion",
        using: "BTREE",
        fields: [
          { name: "eidlicitacion" },
        ]
      },
      {
        name: "dfecha",
        using: "BTREE",
        fields: [
          { name: "dfecha" },
        ]
      },
    ]
  });
};
