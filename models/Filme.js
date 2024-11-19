const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');


const Filme = sequelize.define('Filme', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  faixaEtaria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Desativa os campos `createdAt` e `updatedAt`
});

module.exports = Filme;
