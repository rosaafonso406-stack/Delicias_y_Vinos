const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'deliciasyvinos_secret_2026';

function auth(req, res, next) {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ erro: 'Token em falta' });
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ erro: 'Token inválido' });
  }
}

function adminOnly(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ erro: 'Sem permissão' });
  next();
}

module.exports = { auth, adminOnly };