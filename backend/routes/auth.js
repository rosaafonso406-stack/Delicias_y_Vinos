const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readDB, writeDB } = require('../config/db');

const SECRET = process.env.JWT_SECRET || 'deliciasyvinos_secret_2026';

// POST login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readDB('users');
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ erro: 'Credenciais inválidas' });
  const valido = bcrypt.compareSync(password, user.password);
  if (!valido) return res.status(401).json({ erro: 'Credenciais inválidas' });
  const token = jwt.sign({ id: user._id, role: user.role }, SECRET, { expiresIn: '7d' });
  res.json({ token, nome: user.nome, role: user.role });
});

// POST registo
router.post('/register', (req, res) => {
  const { nome, email, password } = req.body;
  const users = readDB('users');
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ erro: 'Email já existe' });
  }
  const hash = bcrypt.hashSync(password, 10);
  const novo = {
    _id: Date.now().toString(),
    nome,
    email,
    password: hash,
    role: 'cliente',
    criado_em: new Date().toISOString()
  };
  users.push(novo);
  writeDB('users', users);
  res.json({ mensagem: 'Utilizador criado!' });
});

// GET utilizadores (admin)
router.get('/users', (req, res) => {
  const users = readDB('users');
  const result = users.map(u => ({
    id: u._id,
    nome: u.nome,
    email: u.email,
    rol: u.role,
    data_registo: u.criado_em
  }));
  res.json(result);
});

// DELETE utilizador
router.delete('/users/:id', (req, res) => {
  let users = readDB('users');
  users = users.filter(u => u._id !== req.params.id);
  writeDB('users', users);
  res.json({ mensagem: 'Utilizador apagado!' });
});

module.exports = router;