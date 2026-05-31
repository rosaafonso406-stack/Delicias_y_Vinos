const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../config/db');

// GET todas as encomendas
router.get('/', (req, res) => {
  const orders = readDB('orders');
  const users = readDB('users');
  const result = orders.map(o => ({
    ...o,
    id: o._id,
    utilizador_nome: users.find(u => u._id === o.utilizador_id)?.nome || '—',
    criado_em: o.criado_em
  }));
  res.json(result);
});

// POST criar encomenda
router.post('/', (req, res) => {
  const orders = readDB('orders');
  const nova = {
    _id: Date.now().toString(),
    ...req.body,
    estado: 'pendente',
    criado_em: new Date().toISOString()
  };
  orders.push(nova);
  writeDB('orders', orders);
  res.json({ mensagem: 'Encomenda criada!', id: nova._id });
});

// PUT atualizar estado
router.put('/:id', (req, res) => {
  const orders = readDB('orders');
  const idx = orders.findIndex(o => o._id === req.params.id);
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' });
  orders[idx] = { ...orders[idx], ...req.body };
  writeDB('orders', orders);
  res.json({ mensagem: 'Encomenda atualizada!' });
});

module.exports = router;