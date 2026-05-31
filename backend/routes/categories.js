const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../config/db');

// GET todas as categorias
router.get('/', (req, res) => {
  const categories = readDB('categories');
  const result = categories.map(c => ({
    ...c,
    id: c._id,
    nombre: c.nome,
    slug: c.slug,
    padre_slug: c.pai || null,
    icone: c.icone || '🍷',
    descricao: c.descricao || ''
  }));
  res.json(result);
});

// POST criar categoria
router.post('/', (req, res) => {
  const categories = readDB('categories');
  const novo = {
    _id: req.body.slug || Date.now().toString(),
    nome: req.body.nombre,
    slug: req.body.slug,
    pai: req.body.padre_slug || null,
    icone: req.body.icone || '🍷',
    descricao: req.body.descricao || '',
    ordem: categories.length + 1
  };
  categories.push(novo);
  writeDB('categories', categories);
  res.json({ mensagem: 'Categoria criada!', id: novo._id });
});

// PUT editar categoria
router.put('/:id', (req, res) => {
  const categories = readDB('categories');
  const idx = categories.findIndex(x => x._id === req.params.id);
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' });
  categories[idx] = {
    ...categories[idx],
    nome: req.body.nombre || categories[idx].nome,
    slug: req.body.slug || categories[idx].slug,
    pai: req.body.padre_slug || null,
    icone: req.body.icone || '🍷',
    descricao: req.body.descricao || ''
  };
  writeDB('categories', categories);
  res.json({ mensagem: 'Categoria atualizada!' });
});

router.delete('/:id', (req, res) => {
  let categories = readDB('categories');
  categories = categories.filter(x => x._id !== req.params.id && String(x._id) !== req.params.id);
  writeDB('categories', categories);
  res.json({ mensagem: 'Categoria apagada!' });
});

module.exports = router;