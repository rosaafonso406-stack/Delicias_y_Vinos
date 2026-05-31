const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../config/db');

// GET carrinho por session
router.get('/:sessionId', (req, res) => {
  const carts = readDB('cart');
  const cart = carts.find(c => c.sessionId === req.params.sessionId);
  res.json(cart?.items || []);
});

// POST adicionar ao carrinho
router.post('/', (req, res) => {
  const { sessionId, produto_id, quantidade } = req.body;
  const carts = readDB('cart');
  const products = readDB('products');
  const produto = products.find(p => p._id === produto_id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });

  let cart = carts.find(c => c.sessionId === sessionId);
  if (!cart) {
    cart = { sessionId, items: [], atualizado_em: new Date().toISOString() };
    carts.push(cart);
  }

  const item = cart.items.find(i => i.produto_id === produto_id);
  if (item) {
    item.quantidade += quantidade || 1;
  } else {
    cart.items.push({
      produto_id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: quantidade || 1
    });
  }

  cart.atualizado_em = new Date().toISOString();
  writeDB('cart', carts);
  res.json({ mensagem: 'Adicionado ao carrinho!', cart: cart.items });
});

// DELETE remover item
router.delete('/:sessionId/:produtoId', (req, res) => {
  const carts = readDB('cart');
  const cart = carts.find(c => c.sessionId === req.params.sessionId);
  if (!cart) return res.status(404).json({ erro: 'Carrinho não encontrado' });
  cart.items = cart.items.filter(i => i.produto_id !== req.params.produtoId);
  writeDB('cart', carts);
  res.json({ mensagem: 'Item removido!' });
});

module.exports = router;