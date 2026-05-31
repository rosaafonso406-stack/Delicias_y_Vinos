const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, 'db');
if (!fs.existsSync(dbPath)) fs.mkdirSync(dbPath);

const categories = [
  { _id: 'vinos', nome: 'Vinos', slug: 'vinos', ordem: 1, pai: null },
  { _id: 'vinos-blancos', nome: 'Blancos', slug: 'blancos', ordem: 1, pai: 'vinos' },
  { _id: 'vinos-tintos', nome: 'Tintos', slug: 'tintos', ordem: 2, pai: 'vinos' },
  { _id: 'vinos-rosados', nome: 'Rosados', slug: 'rosados', ordem: 3, pai: 'vinos' },
  { _id: 'vinos-espumosos', nome: 'Espumosos', slug: 'espumosos', ordem: 4, pai: 'vinos' },
  { _id: 'vinos-dulces', nome: 'Dulces', slug: 'dulces', ordem: 5, pai: 'vinos' },
  { _id: 'vinos-magnum', nome: 'Magnum', slug: 'magnum', ordem: 6, pai: 'vinos' },
  { _id: 'vinos-estuches', nome: 'Estuches', slug: 'estuches', ordem: 7, pai: 'vinos' },
  { _id: 'vinos-internacionales', nome: 'Internacionales', slug: 'internacionales', ordem: 8, pai: 'vinos' },
  { _id: 'vinos-olorosos', nome: 'Olorosos', slug: 'olorosos', ordem: 9, pai: 'vinos' },

  { _id: 'destilados', nome: 'Destilados', slug: 'destilados', ordem: 2, pai: null },
  { _id: 'destilados-vermouth', nome: 'Vermouth', slug: 'vermouth', ordem: 1, pai: 'destilados' },
  { _id: 'destilados-sidra', nome: 'Sidra', slug: 'sidra', ordem: 2, pai: 'destilados' },
  { _id: 'destilados-cremas', nome: 'Cremas y Licores', slug: 'cremasylicores', ordem: 3, pai: 'destilados' },
  { _id: 'destilados-brandys', nome: 'Brandys', slug: 'brandys', ordem: 4, pai: 'destilados' },

  { _id: 'gourmet', nome: 'Gourmet', slug: 'gourmet', ordem: 3, pai: null },
  { _id: 'gourmet-conservas', nome: 'Conservas', slug: 'conservas', ordem: 1, pai: 'gourmet' },
  { _id: 'gourmet-aceite', nome: 'Aceite', slug: 'aceite', ordem: 2, pai: 'gourmet' },
  { _id: 'gourmet-ibericos', nome: 'Ibéricos', slug: 'ibericos', ordem: 3, pai: 'gourmet' },
  { _id: 'gourmet-pimenton', nome: 'Pimentòn', slug: 'pimenton', ordem: 4, pai: 'gourmet' },
  { _id: 'gourmet-fruta', nome: 'Fruta', slug: 'fruta', ordem: 5, pai: 'gourmet' },
 
  { _id: 'infusiones', nome: 'Infusiones', slug: 'infusiones', ordem: 4, pai: null },
  { _id: 'infusiones-cafe', nome: 'Café', slug: 'cafe', ordem: 1, pai: 'infusiones' },
  { _id: 'infusiones-cerveza', nome: 'Cerveza', slug: 'cerveza', ordem: 2, pai: 'infusiones' },

  { _id: 'dulces', nome: 'Dulces', slug: 'dulces', ordem: 5, pai: null },
  { _id: 'gourmet-chocolates', nome: 'Chocolates', slug: 'chocolates', ordem: 1, pai: 'dulces' },
  { _id: 'gourmet-bombones', nome: 'Bombones', slug: 'bombones', ordem: 2, pai: 'dulces' },

];

const products = [
  { _id: 'mar-de-frades', nome: 'Vino Albariño Mar de Frades', descricao: 'Albariño fresco y equilibrado con aromas florales.', preco: 17.66, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-blancos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/mar-de-frades.png', stock: true, destaque: true, novidade: false },
  { _id: 'fillaboa-50cl', nome: 'Vino Albariño Fillaboa 50 CL', descricao: 'Albariño en media botella. Fresco y persistente.', preco: 10.66, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-blancos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/FILLABOA-50-CL.jpg', stock: true, destaque: false, novidade: false },
  { _id: 'fillaboa', nome: 'Albariño Fillaboa', descricao: 'Clásico albariño de Rías Baixas.', preco: 14.54, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-blancos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/fillaboa.png', stock: true, destaque: false, novidade: false },
  { _id: 'ramon-bilbao-050', nome: 'Vino Ramón Bilbao Crianza 0.50L', descricao: 'Crianza de Rioja en formato media botella.', preco: 6.92, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-tintos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/RB-050.jpg', stock: true, destaque: true, novidade: false },
  { _id: 'vina-albina-gran-reserva', nome: 'Rioja Viña Albina Gran Reserva', descricao: 'Gran Reserva con crianza mínima de 5 años.', preco: 9.65, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-tintos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/VINA-ALBINA-G-RVA.jpg', stock: true, destaque: true, novidade: false },
  { _id: 'carlos-moro-prestigio', nome: 'Vino Carlos Moro Prestigio', descricao: 'Vino de autor de Ribera del Duero.', preco: 27.01, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-tintos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/carlos-prestigio.jpg', stock: true, destaque: true, novidade: false },
  { _id: 'proventus', nome: 'Vino Ribera del Duero Proventus', descricao: 'Tinto potente con crianza en roble francés.', preco: 20.09, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-tintos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/proventus-1656593.jpg', stock: true, destaque: true, novidade: false },
  { _id: 'monte-real-garnacha', nome: 'Monte Real Garnacha', descricao: 'Tinto carnoso de viñedos viejos.', preco: 14.99, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-tintos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/GARNACHA.jpg', stock: true, destaque: false, novidade: false },
  { _id: 'matarromera-crianza', nome: 'Matarromera Crianza', descricao: 'Crianza de Ribera del Duero.', preco: 23.68, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-tintos', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/matarromera-crianza-1782889.jpg', stock: true, destaque: false, novidade: true },
  { _id: 'peregrino-rosado', nome: 'Peregrino Rosado', descricao: 'Vino rosado joven, ligero y refrescante.', preco: 4.99, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-rosados', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/PEREGRINO-ROSADO.jpg', stock: true, destaque: true, novidade: false },
  { _id: 'ondipuerko-rosado', nome: 'Vino Rioja Ondipuerko Rosado', descricao: 'Rosado de Rioja con aromas de frutas rojas.', preco: 15.16, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-rosados', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/ONDIPUERKO-ROSADO.jpg', stock: true, destaque: true, novidade: false },
  { _id: 'sanson-original', nome: 'Vino Dulce Sanson Original', descricao: 'Vino dulce suave con aromas de miel.', preco: 5.75, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-dulces', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/sanson.png', stock: true, destaque: false, novidade: false },
  { _id: 'vendimia-tardia', nome: 'Tokaji Oremus Vendimia Tardía', descricao: 'Vino dulce húngaro de gran calidad.', preco: 26.32, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-dulces', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/VENDIMIA-TARDIA.jpg', stock: true, destaque: false, novidade: false },
  { _id: 'ramon-bilbao-5l', nome: 'Vino Ramón Bilbao Crianza 5L', descricao: 'Ramón Bilbao en formato especial de 5 litros.', preco: 60.24, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-magnum', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/RBILBAO-5L.jpg', stock: true, destaque: false, novidade: false },
  { _id: 'centvm-vitis', nome: 'Vino Rioja Centvm Vitis', descricao: 'Edición limitada con uvas centenarias.', preco: 123.25, preco_antigo: null, categoria_id: 'vinos', subcategoria_id: 'vinos-estuches', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/centvm-vitis-estuche-lujo.jpg', stock: true, destaque: true, novidade: false },
  { _id: 'cubical-premium', nome: 'Ginebra Cubical Premium', descricao: 'Ginebra española ideal para gin-tonics.', preco: 22.51, preco_antigo: null, categoria_id: 'destilados', subcategoria_id: null, imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/cubical-premium.png', stock: true, destaque: true, novidade: false },
  { _id: 'old-parr', nome: 'Whisky Old Parr 1L', descricao: 'Whisky escocés con notas de miel y especias.', preco: 42.93, preco_antigo: null, categoria_id: 'destilados', subcategoria_id: null, imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/OLD-PARR.jpg', stock: true, destaque: true, novidade: false },
  { _id: 'fillaboa-reserva', nome: 'Orujo Fillaboa Reserva Especial', descricao: 'Orujo envejecido en barrica.', preco: 42.93, preco_antigo: null, categoria_id: 'destilados', subcategoria_id: null, imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/FILLABOA-RVA-ESP.jpg', stock: true, destaque: false, novidade: false },
  { _id: 'bonito-ortiz', nome: 'Bonito del Norte Ortiz 260', descricao: 'Bonito en aceite de oliva bajo en sal.', preco: 7.07, preco_antigo: null, categoria_id: 'gourmet', subcategoria_id: 'gourmet-conservas', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/BONITO-BAJO-SAL.jpg', stock: true, destaque: false, novidade: false },
  { _id: 'negro-95', nome: 'Chocolate Negro 95% Cacao', descricao: 'Chocolate negro intenso.', preco: 3.39, preco_antigo: null, categoria_id: 'gourmet', subcategoria_id: 'gourmet-chocolates', imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/NEGRO-95.jpg', stock: true, destaque: false, novidade: true },
  { _id: 'queso-oveja-3kg', nome: 'Queso Curado de Oveja 3 KG', descricao: 'Queso curado de oveja de calidad.', preco: 70.46, preco_antigo: null, categoria_id: 'gourmet', subcategoria_id: null, imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/SANSUENA-3-KG.png', stock: true, destaque: false, novidade: false },
  { _id: 'queso-durius-1kg', nome: 'Queso Durius Oveja Pieza 1 KG', descricao: 'Queso Durius en caja.', preco: 26.13, preco_antigo: null, categoria_id: 'gourmet', subcategoria_id: null, imagem: 'https://www.deliciasyvinos.com/uploads/media/images/355x355/ZORITA-1-KG.jpg', stock: true, destaque: false, novidade: false },
];

const run = async () => {
  const hash = await bcrypt.hash('admin123', 10);
  const users = [
    { _id: 'u1', nome: 'Administrador', email: 'admin@deliciasyvinos.com', password: hash, role: 'admin', criado_em: new Date().toISOString() }
  ];

  fs.writeFileSync(path.join(dbPath, 'categories.json'), JSON.stringify(categories, null, 2));
  fs.writeFileSync(path.join(dbPath, 'products.json'), JSON.stringify(products, null, 2));
  fs.writeFileSync(path.join(dbPath, 'users.json'), JSON.stringify(users, null, 2));
  fs.writeFileSync(path.join(dbPath, 'orders.json'), JSON.stringify([], null, 2));
  fs.writeFileSync(path.join(dbPath, 'cart.json'), JSON.stringify([], null, 2));

  console.log('✅ Base de dados criada!');
  console.log('📦 Categorias: ' + categories.length);
  console.log('🍷 Produtos: ' + products.length);
  console.log('👤 Admin: admin@deliciasyvinos.com / admin123');
};

run().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });