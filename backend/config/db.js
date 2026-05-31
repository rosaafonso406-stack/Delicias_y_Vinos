const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../database/db');

function readDB(file) {
  const filePath = path.join(dbPath, file + '.json');
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeDB(file, data) {
  const filePath = path.join(dbPath, file + '.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { read: readDB, write: writeDB, readDB, writeDB };