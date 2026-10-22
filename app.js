/**
 * Bolos da Didi — Viamão - RS
 * Cardápio Digital & Checkout Oficial Onira.fly Direto no WhatsApp
 * WhatsApp Oficial: (51) 9794-6693
 * Endereço: Av. Liberdade, 2077 - Santa Isabel, Viamão/RS
 * Powered by Onira Labs
 */

// WhatsApp Oficial da Bolos da Didi
const CLIENT_WHATSAPP = '555197946693';

// Catálogo Oficial com Imagens e Descrições das Fornadas da Didi
const CATALOG_ITEMS = [
  {
    id: "vulcao-brigadeiro",
    name: "Bolo Vulcão de Brigadeiro Artesanal",
    category: "vulcao",
    categoryLabel: "Bolos Vulcão & Piscininha",
    desc: "Massa fofinha de chocolate 50% cacau com erupção farta de brigadeiro gourmet cremoso no centro e granulado nobre.",
    price: 44.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_vulcao_chocolate.jpg",
    destaque: true,
    badge: "Mais Pedido ⭐",
    rating: "5.0"
  },
  {
    id: "cenoura-chocolate",
    name: "Bolo de Cenoura com Calda de Chocolate",
    category: "caseiros",
    categoryLabel: "Bolos Caseiros Tradicionais",
    desc: "A clássica receita da Didi: massa leve e úmida de cenouras frescas com cobertura aveludada de chocolate meio amargo.",
    price: 32.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_cenoura_chocolate.jpg",
    destaque: true,
    badge: "Assinatura da Casa ⭐",
    rating: "5.0"
  },
  {
    id: "caseiro-laranja",
    name: "Bolo Caseiro de Laranja Fresca",
    category: "caseiros",
    categoryLabel: "Bolos Caseiros Tradicionais",
    desc: "Feito com suco natural de laranjas selecionadas, sem essências. Massa aerada com finalização em calda cítrica suave.",
    price: 28.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_laranja_bergamota.jpg",
    destaque: true,
    badge: "Tradicional ⭐",
    rating: "4.9"
  },
  {
    id: "caseiro-bergamota",
    name: "Bolo Caseiro de Bergamota Gaúcha",
    category: "caseiros",
    categoryLabel: "Bolos Caseiros Tradicionais",
    desc: "Receita típica da serra e do sul com o aroma inconfundível da bergamota fresca. Massa fofa perfeita para o café da tarde.",
    price: 28.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_laranja_bergamota.jpg",
    destaque: false,
    badge: "Sabor do Sul 🍊",
    rating: "5.0"
  },
  {
    id: "caseiro-cappuccino",
    name: "Bolo Caseiro de Cappuccino",
    category: "caseiros",
    categoryLabel: "Bolos Caseiros Tradicionais",
    desc: "Massa aromatizada com café especial, cacau e canela em pó. Equilíbrio aromático perfeito e textura macia.",
    price: 30.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_whatsapp.jpg",
    destaque: false,
    badge: "",
    rating: "4.9"
  },
  {
    id: "caseiro-casadinho",
    name: "Bolo Caseiro Casadinho",
    category: "caseiros",
    categoryLabel: "Bolos Caseiros Tradicionais",
    desc: "Metade massa branca amanteigada de baunilha, metade massa de chocolate 50%. A harmonia de dois sabores em um só bolo.",
    price: 30.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_catalogo.jpg",
    destaque: false,
    badge: "",
    rating: "4.8"
  },
  {
    id: "vulcao-branquinho",
    name: "Bolo Vulcão de Branquinho (Brigadeiro Branco)",
    category: "vulcao",
    categoryLabel: "Bolos Vulcão & Piscininha",
    desc: "Massa amanteigada fofinha com recheio farto de branquinho de colher feito à mão, transbordando ao cortar a primeira fatia.",
    price: 44.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_vulcao_chocolate.jpg",
    destaque: false,
    badge: "",
    rating: "4.9"
  },
  {
    id: "vulcao-doce-leite",
    name: "Bolo Piscininha de Doce de Leite",
    category: "vulcao",
    categoryLabel: "Bolos Vulcão & Piscininha",
    desc: "Formato piscininha com cobertura farta de doce de leite cremoso artesanal e toque de canela opcional.",
    price: 42.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_catalogo.jpg",
    destaque: false,
    badge: "",
    rating: "4.9"
  },
  {
    id: "vulcao-goiabada",
    name: "Bolo Caseiro com Cobertura de Goiabada Cremosa",
    category: "vulcao",
    categoryLabel: "Bolos Vulcão & Piscininha",
    desc: "Bolo tradicional fofinho com cobertura quente de goiabada cascão derretida. O par perfeito para o chimarrão ou café.",
    price: 38.0,
    typePreco: "Bolo Inteiro",
    img: "assets/bolo_whatsapp.jpg",
    destaque: false,
    badge: "",
    rating: "4.9"
  },
  {
    id: "pote-brigadeiro",
    name: "Bolo de Pote Brigadeiro Gourmet",
    category: "potes",
    categoryLabel: "Bolos de Pote & Sobremesas",
    desc: "Camadas generosas de bolo de chocolate úmido intercaladas com brigadeiro artesanal e granulado nobre em pote individual de 250ml.",
    price: 15.0,
    typePreco: "Unidade 250ml",
    img: "assets/bolo_pote_oferta.jpg",
    destaque: true,
    badge: "Sobremesa Rápida ⭐",
    rating: "5.0"
  },
  {
    id: "pote-dois-amores",
    name: "Bolo de Pote Dois Amores",
    category: "potes",
    categoryLabel: "Bolos de Pote & Sobremesas",
    desc: "Bolo fofinho em camadas perfeitas de brigadeiro preto cremoso e branquinho aveludado da Didi. Embalagem individual selada.",
    price: 15.0,
    typePreco: "Unidade 250ml",
    img: "assets/bolo_pote_artesanal.jpg",
    destaque: false,
    badge: "",
    rating: "4.9"
  },
  {
    id: "encomenda-festa",
    name: "Bolo Comemorativo Recheado (Sob Encomenda)",
    category: "encomendas",
    categoryLabel: "Bolos Festivos & Especiais",
    desc: "Bolo decorado para aniversários e eventos familiares. Massas de baunilha ou chocolate com 2 camadas fartas de recheio à sua escolha.",
    price: 85.0,
    typePreco: "Aprox. 1.5kg",
    img: "assets/bolo_catalogo.jpg",
    destaque: false,
    badge: "Festa & Eventos",
    rating: "5.0"
  }
];

// Estado da Aplicação
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let deliveryType = 'delivery';
let paymentMethod = 'Pix';

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderCatalog();
  updateCartUI();
});

// Renderização do Catálogo
function renderCatalog() {
  const grid = document.getElementById('product-grid');
  const countBadge = document.getElementById('catalog-count-badge');
  const catTitle = document.getElementById('current-category-name');
  const catDesc = document.getElementById('current-category-desc');
  if (!grid) return;

  grid.innerHTML = '';

  let filtered = CATALOG_ITEMS.filter(item => {
    let matchCat = true;
    if (activeCategory === 'destaques') {
      matchCat = item.destaque;
    } else if (activeCategory !== 'all') {
      matchCat = item.category === activeCategory;
    }

    let matchSearch = true;
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      matchSearch = item.name.toLowerCase().includes(q) ||
                    item.desc.toLowerCase().includes(q) ||
                    item.categoryLabel.toLowerCase().includes(q);
    }

    return matchCat && matchSearch;
  });

  // Atualiza título da categoria ativa
  if (catTitle && catDesc) {
    if (activeCategory === 'all') {
      catTitle.textContent = 'Vitrine de Bolos Artesanais';
      catDesc.textContent = 'Receitas caseiras feitas na hora pela Didi, sem conservantes e com ingredientes de verdade.';
    } else if (activeCategory === 'destaques') {
      catTitle.textContent = '⭐ Mais Vendidos da Casa';
      catDesc.textContent = 'Os bolos e sobremesas que os clientes de Viamão mais pedem e recomendam.';
    } else if (activeCategory === 'vulcao') {
      catTitle.textContent = 'Bolos Vulcão & Piscininha';
      catDesc.textContent = 'Massa caseira macia com erupção generosa de calda artesanal cremosíssima.';
    } else if (activeCategory === 'caseiros') {
      catTitle.textContent = 'Bolos Caseiros Tradicionais';
      catDesc.textContent = 'O sabor da infância em massas leves e perfumadas para o seu café.';
    } else if (activeCategory === 'potes') {
      catTitle.textContent = 'Bolos de Pote & Sobremesas';
      catDesc.textContent = 'Doses individuais de pura felicidade em camadas fartas de brigadeiro.';
    } else if (activeCategory === 'encomendas') {
      catTitle.textContent = 'Bolos Festivos & Encomendas';
      catDesc.textContent = 'Produções comemorativas sob medida para aniversários e datas especiais.';
    }
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'opção disponível' : 'opções disponíveis'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px;">
        <p style="font-size: 1.1rem; font-weight: 700; color: var(--primary-roast); margin-bottom: 8px;">Nenhum bolo encontrado para "${searchQuery}"</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px;">Tente pesquisar por outro termo como "vulcão", "cenoura" ou "laranja".</p>
        <button type="button" class="btn-continue-shopping" onclick="window.clearSearch()">Ver Todos os Bolos</button>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-media-box">
        <img src="${item.img}" alt="${item.name}" class="product-img" loading="lazy" onerror="this.src='assets/bolo_vulcao_chocolate.jpg'">
        ${item.badge ? `<span class="product-badge-tag">${item.badge}</span>` : ''}
        <div class="product-rating-badge">
          <i data-lucide="star" style="width:12px;height:12px;fill:#F59E0B;color:#F59E0B;"></i>
          <span>${item.rating}</span>
        </div>
      </div>
      <div class="product-info-box">
        <span class="product-category-name">${item.categoryLabel}</span>
        <h3 class="product-name">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        <div class="product-footer-bar">
          <div class="price-container">
            <span class="price-type-tag">${item.typePreco}</span>
            <span class="price-val">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <button type="button" class="btn-add-product" onclick="window.addToCart('${item.id}')">
            <i data-lucide="plus" style="width:15px;height:15px;"></i>
            <span>Pedir</span>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// Filtro por Categoria
window.filterCategory = function(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderCatalog();
};

// Busca em Tempo Real
window.handleSearch = function(val) {
  searchQuery = typeof val === 'string' ? val : '';
  const clearBtn = document.getElementById('btn-clear-search');
  if (clearBtn) {
    clearBtn.style.display = searchQuery.length > 0 ? 'inline-flex' : 'none';
  }
  renderCatalog();
};

window.clearSearch = function() {
  const input = document.getElementById('catalog-search-input');
  if (input) input.value = '';
  searchQuery = '';
  const clearBtn = document.getElementById('btn-clear-search');
  if (clearBtn) clearBtn.style.display = 'none';
  renderCatalog();
};

// Helpers
function BRL(val) {
  return (val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Alternador Tele-entrega | Balcão (Padrão Ioshi)
window.setFulfillment = function(type) {
  fulfillmentType = type;
  const btnDel = document.getElementById('f-delivery');
  const btnTake = document.getElementById('f-takeout');
  if (btnDel) btnDel.classList.toggle('active', type === 'delivery');
  if (btnTake) btnTake.classList.toggle('active', type === 'takeout');

  const addrGroup = document.getElementById('address-group');
  if (addrGroup) {
    addrGroup.style.display = type === 'delivery' ? 'block' : 'none';
  }
  updateCartUI();
};

// Forma de Pagamento (Padrão Ioshi)
window.setPayment = function(method) {
  selectedPayment = method;
  document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`pay-${method.toLowerCase()}`);
  if (btn) btn.classList.add('active');
};

// Abertura e Fechamento do Drawer (Padrão Ioshi)
window.openCart = function() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCart = function() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
};

window.clearCart = function() {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Pedido limpo com sucesso.');
};

window.changeQuantity = function(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].quantity = (cart[idx].quantity || cart[idx].qty || 1) + delta;
  cart[idx].qty = cart[idx].quantity;
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1);
  }
  saveCart();
  updateCartUI();
};

window.updateItemNotes = function(idx, notes) {
  if (cart[idx]) {
    cart[idx].notes = notes;
    saveCart();
  }
};

// Adição de Produto ao Carrinho
window.addToCart = function(productId) {
  const product = CATALOG_ITEMS.find(p => p.id === productId);
  if (!product) return;

  const existingIdx = cart.findIndex(item => item.id === productId);
  if (existingIdx >= 0) {
    cart[existingIdx].quantity = (cart[existingIdx].quantity || cart[existingIdx].qty || 1) + 1;
    cart[existingIdx].qty = cart[existingIdx].quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.name,
      name: product.name,
      price: product.price,
      image: product.img,
      img: product.img,
      description: product.desc,
      desc: product.desc,
      typePreco: product.typePreco,
      quantity: 1,
      qty: 1,
      notes: ''
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✓ ${product.name} adicionado ao pedido!`);
};

// Renderização e Atualização da UI do Carrinho (Padrão Ioshi)
function updateCartUI() {
  const count = cart.reduce((acc, i) => acc + (i.quantity || i.qty || 1), 0);
  const subtotal = cart.reduce((acc, i) => acc + i.price * (i.quantity || i.qty || 1), 0);

  // Header Elements
  const countHeader = document.getElementById('cart-count');
  const totalHeader = document.getElementById('cart-total-header');
  const clearHeader = document.getElementById('cart-clear-header');
  const drawerClear = document.getElementById('cart-clear-drawer');

  if (countHeader) {
    countHeader.textContent = count;
    countHeader.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  if (totalHeader) {
    totalHeader.textContent = BRL(subtotal);
    totalHeader.style.display = count > 0 ? 'inline-block' : 'none';
  }
  if (clearHeader) {
    clearHeader.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  if (drawerClear) {
    drawerClear.style.display = count > 0 ? 'inline-flex' : 'none';
  }

  // Floating mobile bar
  const floatBar = document.getElementById('cart-floating-bar');
  const floatCount = document.getElementById('float-badge-count');
  const floatItemsText = document.getElementById('float-items-text');
  const floatTotal = document.getElementById('float-total-text');

  if (floatCount) floatCount.textContent = count;
  if (floatItemsText) floatItemsText.textContent = `${count} ${count === 1 ? 'item' : 'itens'}`;
  if (floatTotal) floatTotal.textContent = BRL(subtotal);
  if (floatBar) {
    floatBar.classList.toggle('active', count > 0);
  }
  document.body.classList.toggle('has-cart-bar', count > 0);

  const itemsContainer = document.getElementById('cart-items-container');
  const summaryBox = document.getElementById('cart-summary-box');
  const checkoutBtn = document.getElementById('btn-checkout');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <i data-lucide="shopping-bag"></i>
        <p class="cart-empty-title">Seu pedido está vazio</p>
        <span class="cart-empty-desc">Escolha seus bolos artesanais e faça seu pedido.</span>
      </div>`;
    if (summaryBox) summaryBox.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.display = 'none';
    if (window.lucide) lucide.createIcons();
    return;
  }

  if (summaryBox) summaryBox.style.display = 'block';
  if (checkoutBtn) checkoutBtn.style.display = 'flex';

  // REGRA ABSOLUTA: Cards com FUNDO SEMPRE BRANCO (#FFFFFF)
  itemsContainer.innerHTML = `
    <div class="cart-items-list">
      ${cart.map((item, idx) => {
        const itemQty = item.quantity || item.qty || 1;
        const itemTitle = item.title || item.name;
        const itemImg = item.image || item.img || 'assets/bolo_catalogo.jpg';
        const itemDesc = item.description || item.desc || '';
        return `
          <div class="cart-item-card">
            <div class="cart-item-main">
              <img src="${itemImg}" alt="${esc(itemTitle)}" class="cart-item-thumb" onerror="this.onerror=null;this.src='assets/bolo_catalogo.jpg'">
              <div class="cart-item-details">
                <div class="cart-item-headline">
                  <h4 class="cart-item-title">${esc(itemTitle)}</h4>
                  <span class="cart-item-price">${BRL(item.price * itemQty)}</span>
                </div>
                ${itemDesc ? `<p class="cart-item-desc">${esc(itemDesc)}</p>` : ''}
                <div class="cart-item-actions">
                  <div class="cart-qty-control">
                    <button type="button" class="cart-qty-btn" onclick="window.changeQuantity(${idx}, -1)" aria-label="Diminuir quantidade">−</button>
                    <span class="cart-qty-val">${itemQty}</span>
                    <button type="button" class="cart-qty-btn" onclick="window.changeQuantity(${idx}, 1)" aria-label="Aumentar quantidade">+</button>
                  </div>
                  <span class="cart-item-unit-tag">${BRL(item.price)} un</span>
                </div>
              </div>
            </div>
            <div class="cart-item-notes-wrap">
              <input type="text" class="cart-item-notes" placeholder="Observações (ex: escrever parabéns na embalagem...)" value="${esc(item.notes || '')}" onchange="window.updateItemNotes(${idx}, this.value)">
            </div>
          </div>
        `;
      }).join('')}
    </div>`;

  const subtotalEl = document.getElementById('summary-subtotal');
  const totalEl = document.getElementById('summary-total');
  if (subtotalEl) subtotalEl.textContent = BRL(subtotal);
  if (totalEl) totalEl.textContent = BRL(subtotal);

  if (window.lucide) lucide.createIcons();
}

// CHECKOUT WHATSAPP OFICIAL (PADRÃO ONIRA.FLY • SEM ALERT)
window.checkoutWhatsApp = function() {
  if (cart.length === 0) {
    showToast('Seu pedido está vazio!');
    return;
  }

  const nameInput = document.getElementById('customer-name');
  const customerName = (nameInput && nameInput.value.trim()) || 'Cliente';

  const addressInput = document.getElementById('customer-address');
  let address = (addressInput && addressInput.value.trim()) || '';

  if (fulfillmentType === 'delivery' && !address) {
    address = 'A combinar no WhatsApp';
  }

  const total = cart.reduce((acc, i) => acc + i.price * (i.quantity || i.qty || 1), 0);

  let msg = `_pedido via site by Onira.fly_\n\n`;
  msg += `*Solicitação de ${fulfillmentType === 'delivery' ? 'Tele-Entrega' : 'Retirada no Balcão'}*\n\n`;

  cart.forEach((item) => {
    const itemQty = item.quantity || item.qty || 1;
    const itemTitle = item.title || item.name;
    msg += `*${itemQty}x* ${itemTitle}\n`;
    if (item.notes && item.notes.trim()) {
      msg += `_Obs: ${item.notes.trim()}_\n`;
    }
    msg += `*${BRL(item.price * itemQty)}*\n\n`;
  });

  msg += `*Subtotal:* ${BRL(total)}\n`;
  if (fulfillmentType === 'delivery') {
    msg += `*Taxa de entrega:* A combinar pela localização\n`;
  }
  msg += `*Total estimado:* ${BRL(total)}\n\n`;

  msg += `*${customerName}*\n`;
  if (fulfillmentType === 'delivery') {
    msg += `Endereço: ${address}\n`;
  } else {
    msg += `Retirada: Av. Liberdade, 2077 - Santa Isabel, Viamão/RS\n`;
  }
  msg += `Pagamento: ${selectedPayment}\n\n`;
  msg += `_Enviado pelo canal oficial Bolos da Didi_`;

  const encoded = encodeURIComponent(msg);
  const url = `https://api.whatsapp.com/send?phone=${CLIENT_WHATSAPP}&text=${encoded}`;
  window.open(url, '_blank');
};

// Listeners de Teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeCart();
  }
});

// Persistência em LocalStorage
function saveCart() {
  try {
    localStorage.setItem('onirafly_cart_bolos_didi', JSON.stringify(cart));
  } catch (e) {}
}

function loadCart() {
  try {
    const saved = localStorage.getItem('onirafly_cart_bolos_didi');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {}
}

// Toast Notifier (Zero Window.Alert)
function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2600);
}

// Auto-hide Cabeçalho Inteligente & Opacidade Dinâmica no Scroll
(function initHeaderAndWidgetScroll() {
  const header = document.getElementById('header');
  const oniraCta = document.getElementById('onira-cta');
  
  let lastScrollY = window.scrollY;
  let isTicking = false;
  let scrollTimeout = null;
  const threshold = 8;

  window.addEventListener('scroll', () => {
    // 4. Widget de proposta perde opacidade durante o scroll
    if (oniraCta) {
      oniraCta.classList.add('scrolling');
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        oniraCta.classList.remove('scrolling');
      }, 220);
    }

    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        if (header) {
          if (currentScrollY <= 30) {
            header.classList.remove('header-hidden');
            document.body.classList.remove('header-is-hidden');
          } else if (delta > threshold && currentScrollY > 70) {
            header.classList.add('header-hidden');
            document.body.classList.add('header-is-hidden');
          } else if (delta < -threshold) {
            header.classList.remove('header-hidden');
            document.body.classList.remove('header-is-hidden');
          }
        }

        lastScrollY = currentScrollY;
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });
})();
