const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../config/db');

// GET todos os produtos
router.get('/', (req, res) => {
  const products = readDB('products');
  const categories = readDB('categories');
  const result = products.map(p => ({
    ...p,
    id: p._id,
    nome: p.nome,
    preco: p.preco,
    imagem: p.imagem,
    destaque: p.destaque ? 1 : 0,
    novidade: p.novidade ? 1 : 0,
    stock: p.stock ? 1 : 0,
    categoria_nome: categories.find(c => c._id === p.categoria_id)?.nome || '—'
  }));
  res.json(result);
});

// GET produto por ID
router.get('/:id', (req, res) => {
  const products = readDB('products');
  const p = products.find(x => x._id === req.params.id);
  if (!p) return res.status(404).json({ erro: 'Produto não encontrado' });
  res.json({ ...p, id: p._id });
});

// POST criar produto
router.post('/', (req, res) => {
  const products = readDB('products');
  const novo = {
    _id: Date.now().toString(),
    ...req.body,
    criado_em: new Date().toISOString()
  };
  products.push(novo);
  writeDB('products', products);
  res.json({ mensagem: 'Produto criado!', id: novo._id });
});

// PUT editar produto
router.put('/:id', (req, res) => {
  const products = readDB('products');
  const idx = products.findIndex(x => x._id === req.params.id);
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' });
  products[idx] = { ...products[idx], ...req.body };
  writeDB('products', products);
  res.json({ mensagem: 'Produto atualizado!' });
});

router.delete('/:id', (req, res) => {
  let products = readDB('products');
  products = products.filter(x => x._id !== req.params.id && String(x._id) !== req.params.id);
  writeDB('products', products);
  res.json({ mensagem: 'Produto apagado!' });
});

module.exports = router;