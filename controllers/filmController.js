const Filme = require('../models/Filme');


exports.createFilme = async (req, res) => {
  try {
    const { titulo, ator, faixaEtaria, genero } = req.body;
    const novoFilme = await Filme.create({ titulo, ator, faixaEtaria, genero });
    res.status(201).json(novoFilme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o filme', error });
  }
};


exports.getFilmes = async (req, res) => {
  try {
    const filmes = await Filme.findAll();
    res.status(200).json(filmes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar filmes', error });
  }
};


exports.updateFilme = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, ator, faixaEtaria, genero } = req.body;

    const filmeAtualizado = await Filme.update(
      { titulo, ator, faixaEtaria, genero },
      { where: { id } }
    );

    if (filmeAtualizado[0] === 0) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }

    res.status(200).json({ message: 'Filme atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o filme', error });
  }
};


exports.deleteFilme = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Filme.destroy({ where: { id } });
    
    if (resultado === 0) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }

    res.status(200).json({ message: 'Filme deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar o filme', error });
  }
};
