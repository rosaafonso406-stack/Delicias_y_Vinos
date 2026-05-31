// ─── AGE GATE ─────────────────────────────────────────────────────────
function denyAge() { window.location.href = 'https://www.google.com'; }

// ─── PRODUTOS ─────────────────────────────────────────────────────────
let allProducts = [
  { id:'ramon-bilbao-crianza-050', name:'Vino Ramón Bilbao Crianza 0.50L', price:'6,92€', cat:'rioja', tags:['vinos','tintos','Tintos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/RB-050.jpg' },
  { id:'cubical-premium', name:'Ginebra Cubical Premium', price:'22,51€', cat:'destilados', tags:['destilados'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/cubical-premium.png' },
  { id:'fillaboa-reserva', name:'Orujo Fillaboa Reserva Especial', price:'42,93€', cat:'destilados', tags:['destilados'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/FILLABOA-RVA-ESP.jpg' },
  { id:'mar-de-frades', name:'Vino Albariño Mar de Frades', price:'17,66€', cat:'albarino', tags:['vinos','blancos','Blancos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/mar-de-frades.png' },
  { id:'vendimia-tardia', name:'Tokaji Oremus Vendimia Tardía', price:'26,32€', cat:'dulces', tags:['vinos','dulces','Dulces'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/VENDIMIA-TARDIA.jpg' },
  { id:'monte-real-garnacha', name:'Monte Real Garnacha', price:'14,99€', cat:'rioja', tags:['vinos','tintos','Tintos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/GARNACHA.jpg' },
  { id:'negro-95', name:'Chocolate Negro 95% Cacao', price:'3,39€', cat:'chocolates', tags:['gourmet','chocolates'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/NEGRO-95.jpg' },
  { id:'queso-oveja-3kg', name:'Queso Curado de Oveja 3 KG', price:'70,46€', cat:'gourmet', tags:['gourmet'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/SANSUENA-3-KG.png' },
  { id:'peregrino-rosado', name:'Peregrino Rosado', price:'4,99€', cat:'rosado', tags:['vinos','rosado','Rosado'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/PEREGRINO-ROSADO.jpg' },
  { id:'carlos-moro-prestigio', name:'Vino Carlos Moro Prestigio', price:'27,01€', cat:'riberadelduero', tags:['vinos','tintos','Tintos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/carlos-prestigio.jpg' },
  { id:'ondipuerko-rosado', name:'Vino Rioja Ondipuerko Rosado', price:'15,16€', cat:'rosado', tags:['vinos','rosado','Rosado'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/ONDIPUERKO-ROSADO.jpg' },
  { id:'queso-durius-1kg', name:'Queso Durius Oveja Pieza 1 KG', price:'26,13€', cat:'gourmet', tags:['gourmet'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/ZORITA-1-KG.jpg' },
  { id:'sanson-original', name:'Vino Dulce Sanson Original', price:'5,75€', cat:'dulces', tags:['vinos','dulces','Dulces'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/sanson.png' },
  { id:'proventus', name:'Vino Ribera del Duero Proventus', price:'20,09€', cat:'riberadelduero', tags:['vinos','tintos','Tintos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/proventus-1656593.jpg' },
  { id:'centvm-vitis', name:'Vino Rioja Centvm Vitis', price:'123,25€', cat:'rioja', tags:['vinos','tintos','Tintos','Estuches'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/centvm-vitis-estuche-lujo.jpg' },
  { id:'old-parr', name:'Whisky Old Parr 1L', price:'42,93€', cat:'destilados', tags:['destilados','Internacionales'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/OLD-PARR.jpg' },
  { id:'bonito-ortiz', name:'Bonito del Norte Ortiz 260', price:'7,07€', cat:'conservas', tags:['gourmet','conservas'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/BONITO-BAJO-SAL.jpg' },
  { id:'vina-albina-gran-reserva', name:'Rioja Viña Albina Gran Reserva', price:'9,65€', cat:'rioja', tags:['vinos','tintos','Tintos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/VINA-ALBINA-G-RVA.jpg' },
  { id:'ramon-bilbao-5l', name:'Vino Ramón Bilbao Crianza 5L', price:'60,24€', cat:'rioja', tags:['vinos','tintos','Magnum'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/RBILBAO-5L.jpg' },
  { id:'fillaboa-50cl', name:'Vino Albariño Fillaboa 50 CL', price:'10,66€', cat:'albarino', tags:['vinos','blancos','Blancos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/FILLABOA-50-CL.jpg' },
  { id:'fillaboa', name:'Albariño Fillaboa', price:'14,54€', cat:'albarino', tags:['vinos','blancos','Blancos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/fillaboa.png' },
  { id:'matarromera-crianza', name:'Matarromera Crianza', price:'23,68€', cat:'riberadelduero', tags:['vinos','tintos','Tintos'], img:'https://www.deliciasyvinos.com/uploads/media/images/355x355/matarromera-crianza-1782889.jpg' },
];

const categoryNames = {
  vinos:'Vinos', blancos:'Blancos', tintos:'Tintos', rosado:'Rosado',
  espumoso:'Espumoso', dulces:'Dulces', destilados:'Destilados',
  gourmet:'Gourmet', ibericos:'Ibéricos', albarino:'Albariño',
  godello:'Godello', ribeiro:'Ribeiro', verdejo:'Verdejo',
  rioja:'Rioja', riberadelduero:'Ribera del Duero', mencia:'Mencía',
  cava:'Cava', champagne:'Champagne', magnum:'Magnum',
  estuches:'Estuches', internacionales:'Internacionales',
  vermouth:'Vermouth', sidra:'Sidra', cremasylicores:'Cremas y Licores',
  brandys:'Brandys', conservas:'Conservas', aceite:'Aceite',
  chocolates:'Chocolates', bombones:'Bombones',
  jamonesypaletas:'Jamones y Paletas', pimenton:'Pimentón', pate:'Paté',
  olorosos:'Olorosos', infusiones:'Infusiones', cafe:'Café', cerveza:'Cerveza',
  Blancos:'Blancos', Tintos:'Tintos', Rosado:'Rosado', Dulces:'Dulces',
  Magnum:'Magnum', Estuches:'Estuches', Internacionales:'Internacionales'
};

// ─── CARD HTML ─────────────────────────────────────────────────────────
function productCardHTML(p) {
  return `
    <div class="pcard" data-product="${p.id}">
      <img src="${p.img}" alt="${p.name}" loading="lazy"
        onerror="this.src='https://via.placeholder.com/355x355/1a1410/c9a84c?text=🍷'">
      <div class="pcard-info">
        <h3>${p.name}</h3>
        <div class="pcard-price">${p.price}</div>
        <button class="btn-add" data-product="${p.id}"
          onclick="addToCart('${p.id}','${p.name}','${p.price}');event.stopPropagation()">
          Añadir a la cesta
        </button>
      </div>
    </div>`;
}

// ─── RENDER ────────────────────────────────────────────────────────────
function renderCarousel() {
  const track = document.getElementById('car-track');
  if (!track) return;
  track.innerHTML = allProducts.slice(0, 10).map(productCardHTML).join('');
}

function renderGrid() {
  const grid = document.getElementById('pgrid');
  if (!grid) return;
  grid.innerHTML = allProducts.map(productCardHTML).join('');
}

// ─── NAVEGAÇÃO ─────────────────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const footer = document.querySelector('.footer');
  if (footer) footer.style.display = id === 'home' ? '' : 'none';
}

function closePage(id) {
  document.getElementById('page-' + id)?.classList.remove('active');
}

document.addEventListener('click', function(e) {
  const pageEl = e.target.closest('[data-page]');
  const catEl  = e.target.closest('[data-cat]');
  const prodEl = e.target.closest('[data-product]');

  if (pageEl && !e.target.classList.contains('btn-add')) {
    e.preventDefault();
    const page = pageEl.getAttribute('data-page');
    if (page === 'login') {
      document.getElementById('page-login').classList.toggle('active');
      return;
    }
    if (page === 'cart') { openCart(); return; }
    showPage(page);
    return;
  }

  if (catEl) {
    e.preventDefault();
    loadCategory(catEl.getAttribute('data-cat'));
    return;
  }

  if (prodEl && !prodEl.classList.contains('btn-add') && !e.target.classList.contains('btn-add')) {
    loadProduct(prodEl.getAttribute('data-product'));
  }
});

// ─── CATEGORIA ─────────────────────────────────────────────────────────
function loadCategory(cat) {
  const name = categoryNames[cat] || cat;
  document.getElementById('category-name').textContent = name;
  document.getElementById('category-title').textContent = name;

  const filtered = allProducts.filter(p =>
    p.cat === cat || (p.tags && p.tags.includes(cat))
  );
  const show = filtered.length ? filtered : allProducts;

  document.getElementById('category-products').innerHTML =
    show.map(productCardHTML).join('');

  // Subcategorias fixas por categoriav
const subcats = {
  vinos:      ['blancos','tintos','rosado','espumoso','dulces','magnum','estuches','internacionales'],
  blancos:    ['albarino','godello','ribeiro','verdejo'],
  tintos:     ['rioja','riberadelduero','mencia'],
  destilados: ['vermouth','sidra','cremasylicores','brandys'],
  infusiones: ['cafe','cerveza'],
  gourmet:    ['conservas','aceite','jamonesypaletas','pimenton','pate','ibericos'],
  dulce:      ['chocolates','bombones'],
};

  const side = document.getElementById('sidebar-subcats');
  const subs = subcats[cat];

  if (subs && subs.length) {
    // Mostra subcategorias da categoria clicada
    side.innerHTML = subs.map(k =>
      `<a href="#" data-cat="${k}">${categoryNames[k] || k}</a>`
    ).join('');
  } else {
    // É uma subcategoria — mostra a categoria pai e as irmãs
    const parentEntry = Object.entries(subcats).find(([, v]) => v.includes(cat));
    if (parentEntry) {
      const [parentKey, sisters] = parentEntry;
      side.innerHTML =
        `<a href="#" data-cat="${parentKey}" style="color:var(--gold)">← ${categoryNames[parentKey] || parentKey}</a>` +
        sisters.map(k =>
          `<a href="#" data-cat="${k}" style="${k === cat ? 'color:var(--gold-light);border-left:2px solid var(--gold);padding-left:1.8rem' : ''}">${categoryNames[k] || k}</a>`
        ).join('');
    } else {
      side.innerHTML = '';
    }
  }

  showPage('category');
}
// ─── PRODUTO ───────────────────────────────────────────────────────────
function loadProduct(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  document.getElementById('product-img').src = p.img;
  document.getElementById('product-name').textContent = p.name;
  document.getElementById('product-price').textContent = p.price;
  document.getElementById('product-meta').textContent = categoryNames[p.cat] || p.cat;
  document.getElementById('product-desc').textContent = 'Producto seleccionado de máxima calidad. Disponible para envío a toda España en 24-48h.';
  document.getElementById('product-breadcrumb-name').textContent = p.name;
  const related = allProducts.filter(x => x.cat === p.cat && x.id !== id).slice(0, 4);
  document.getElementById('related-products-grid').innerHTML = related.map(productCardHTML).join('');
  document.getElementById('product-add-btn').onclick = () => addToCart(p.id, p.name, p.price);
  showPage('product');
}

// ─── CARRINHO ──────────────────────────────────────────────────────────
let cart = [];

function addToCart(id, name, price) {
  const existing = cart.find(i => i.id === id);
  existing ? existing.qty++ : cart.push({ id, name, price, qty: 1 });
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((a, i) => a + i.qty, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;

  const items = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('cart-total-display');
  const totalPrice = document.getElementById('cart-total-price');
  if (!items) return;

  if (!cart.length) {
    items.innerHTML = '<p class="cart-empty">Tu cesta está vacía.</p>';
    if (totalDisplay) totalDisplay.style.display = 'none';
    return;
  }

  items.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${allProducts.find(p=>p.id===i.id)?.img||''}" alt="${i.name}">
      <div class="cart-item-name">${i.name} x${i.qty}</div>
      <div class="cart-item-price">${i.price}</div>
      <button class="cart-item-rm" onclick="removeFromCart('${i.id}')">✕</button>
    </div>`).join('');

  if (totalDisplay) totalDisplay.style.display = 'block';
  if (totalPrice) {
    const total = cart.reduce((a, i) => a + parseFloat(i.price.replace(',','.').replace('€','')) * i.qty, 0);
    totalPrice.textContent = total.toFixed(2).replace('.',',') + '€';
  }
}

function openCart() { showPage('cart'); }

// ─── SLIDER ────────────────────────────────────────────────────────────
let currentSlide = 0;

function goSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  slides[currentSlide]?.classList.remove('active');
  dots[currentSlide]?.classList.remove('active');
  currentSlide = n;
  slides[currentSlide]?.classList.add('active');
  dots[currentSlide]?.classList.add('active');
}

// ─── CAROUSEL ──────────────────────────────────────────────────────────
let carPos = 0;

function initCarousel() {
  const prev  = document.getElementById('car-prev');
  const next  = document.getElementById('car-next');
  const track = document.getElementById('car-track');
  if (!prev || !next || !track) return;
  prev.addEventListener('click', () => {
    carPos = Math.max(0, carPos - 1);
    const w = (track.children[0]?.offsetWidth || 0) + 22;
    track.style.transform = `translateX(-${carPos * w}px)`;
  });
  next.addEventListener('click', () => {
    const max = track.children.length - 4;
    carPos = Math.min(max, carPos + 1);
    const w = (track.children[0]?.offsetWidth || 0) + 22;
    track.style.transform = `translateX(-${carPos * w}px)`;
  });
}

// ─── PESQUISA ──────────────────────────────────────────────────────────
function toggleSearch() {
  const panel = document.getElementById('search-panel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    document.getElementById('search-input').focus();
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('search-input').value = '';
  }
}

function doSearch(query) {
  const results = document.getElementById('search-results');
  if (query.length < 2) { results.innerHTML = ''; return; }
  const q = query.toLowerCase();
  const found = allProducts.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
  );
  if (!found.length) {
    results.innerHTML = '<p style="color:var(--cream-dim);font-style:italic;padding:1rem">Sin resultados.</p>';
    return;
  }
  results.innerHTML = found.slice(0, 8).map(p => `
    <div class="pcard" onclick="toggleSearch();loadProduct('${p.id}')">
      <img src="${p.img}" alt="${p.name}">
      <div class="pcard-info">
        <h3>${p.name}</h3>
        <span class="pcard-price">${p.price}</span>
      </div>
    </div>`).join('');
}

// ─── FILTRO PREÇO ──────────────────────────────────────────────────────
document.addEventListener('change', function(e) {
  if (e.target.type === 'checkbox' && e.target.closest('.price-filter')) {
    applyPriceFilter();
  }
});

function applyPriceFilter() {
  const checked = [...document.querySelectorAll('.price-filter input:checked')]
    .map(cb => cb.parentElement.textContent.trim());
  const grid = document.getElementById('category-products');
  if (!grid) return;
  const currentCat = document.getElementById('category-title')?.textContent;
  let produtos = allProducts.filter(p =>
    p.cat === currentCat?.toLowerCase() ||
    (p.tags && p.tags.includes(currentCat))
  );
  if (!produtos.length) produtos = allProducts;
  if (!checked.length) { grid.innerHTML = produtos.map(productCardHTML).join(''); return; }
  const filtrado = produtos.filter(p => {
    const price = parseFloat(p.price.replace(',','.').replace('€',''));
    return checked.some(range => {
      if (range.includes('0 — 10'))  return price <= 10;
      if (range.includes('10 — 25')) return price > 10 && price <= 25;
      if (range.includes('25 — 50')) return price > 25 && price <= 50;
      if (range.includes('+ 50'))    return price > 50;
      return false;
    });
  });
  grid.innerHTML = filtrado.length
    ? filtrado.map(productCardHTML).join('')
    : '<p style="color:var(--cream-dim);padding:2rem;font-style:italic">No se encontraron productos.</p>';
}

// ─── INIT ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  // Tenta carregar produtos da API e junta com os fixos
  try {
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();
    const dbProducts = data.map(p => ({
      id: p._id || p.id,
      name: p.nome,
      price: parseFloat(p.preco).toFixed(2).replace('.', ',') + '€',
      cat: p.categoria_id,
      tags: [p.categoria_id, p.subcategoria_id].filter(Boolean),
      img: p.imagem,
      desc: p.descricao
    }));
    // Junta DB + fixos (sem duplicar por id)
    const idsFixos = allProducts.map(p => p.id);
    const novos = dbProducts.filter(p => !idsFixos.includes(p.id));
    allProducts = [...allProducts, ...novos];
  } catch (err) {
    console.log('BD não disponível, usando produtos fixos');
  }

  renderCarousel();
  renderGrid();
  initCarousel();
  setInterval(() => goSlide((currentSlide + 1) % 3), 5000);
  window.addEventListener('scroll', () => {
    document.querySelector('.hdr')?.classList.toggle('scrolled', window.scrollY > 40);
  });
});
// Menu abre ao clicar não ao hover
document.querySelectorAll('.nav-item').forEach(item => {
  const link = item.querySelector(':scope > a');
  const drop = item.querySelector('.nav-drop');
  if (!link || !drop) return;
  link.addEventListener('click', function(e) {
    if (drop) {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
      item.classList.toggle('open');
    }
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
});