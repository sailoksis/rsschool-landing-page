const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('atelier-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.setAttribute('aria-pressed', 'true');
  themeToggle.setAttribute('aria-label', 'Switch to light theme');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const isDark = document.body.classList.contains('dark-theme');

  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light theme' : 'Switch to dark theme'
  );

  localStorage.setItem('atelier-theme', isDark ? 'dark' : 'light');
});

const burgerButton = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationLinks = document.querySelectorAll('.navigation a');

function openMenu() {
  if (!burgerButton || !navigation) {
    return;
  }

  navigation.classList.add('navigation--open');
  burgerButton.classList.add('burger--open');
  document.body.classList.add('menu-open');

  burgerButton.setAttribute('aria-expanded', 'true');
  burgerButton.setAttribute('aria-label', 'Close navigation menu');
}

function closeMenu() {
  if (!burgerButton || !navigation) {
    return;
  }

  navigation.classList.remove('navigation--open');
  burgerButton.classList.remove('burger--open');
  document.body.classList.remove('menu-open');

  burgerButton.setAttribute('aria-expanded', 'false');
  burgerButton.setAttribute('aria-label', 'Open navigation menu');
}

if (burgerButton && navigation) {
  burgerButton.addEventListener('click', () => {
    const isOpen = navigation.classList.contains('navigation--open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navigationLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape'
      && navigation.classList.contains('navigation--open')
    ) {
      closeMenu();
      burgerButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
      closeMenu();
    }
  });
}

const catalogGrid = document.querySelector('.catalog-grid');
const catalogTabs = document.querySelectorAll('.catalog-tab');
const loadMoreButton = document.querySelector('.catalog__more .button');

const INITIAL_PRODUCTS_COUNT = 4;

let activeCategory = 'seating';
let showAllProducts = false;

function createProductCard(product) {
  const card = document.createElement('article');
  card.classList.add('catalog-card');
  card.dataset.productId = product.id;

  card.innerHTML = `
    <div class="catalog-card__image">
      <img
        src="${product.image}"
        alt="${product.name}, ${product.period}"
      >
    </div>

    <div class="catalog-card__content">
      <p class="catalog-card__meta">
        ${product.origin} · ${product.period}
      </p>

      <h2 class="catalog-card__title">${product.name}</h2>

      <p class="catalog-card__material">
        ${product.material}
      </p>

      <p class="catalog-card__price">
        €${product.price.toLocaleString('en-US')}
      </p>
    </div>
  `;

  return card;
}

function renderProducts() {
  if (!catalogGrid || typeof products === 'undefined') {
    return;
  }

  const categoryProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const visibleProducts = showAllProducts
    ? categoryProducts
    : categoryProducts.slice(0, INITIAL_PRODUCTS_COUNT);

  catalogGrid.replaceChildren();

  visibleProducts.forEach((product) => {
    catalogGrid.append(createProductCard(product));
  });

  if (loadMoreButton) {
    const hasHiddenProducts =
      visibleProducts.length < categoryProducts.length;

    loadMoreButton.hidden = !hasHiddenProducts;
  }
}

catalogTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activeCategory = tab.dataset.category;
    showAllProducts = false;

    catalogTabs.forEach((item) => {
      item.classList.remove('catalog-tab--active');
      item.setAttribute('aria-pressed', 'false');
    });

    tab.classList.add('catalog-tab--active');
    tab.setAttribute('aria-pressed', 'true');

    renderProducts();
  });
});

if (loadMoreButton) {
  loadMoreButton.addEventListener('click', () => {
    showAllProducts = true;
    renderProducts();
  });
}

renderProducts();