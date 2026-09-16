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

// Featured carousel

const featuredSlider = document.querySelector('.featured__slider');
const featuredPrevButton = document.querySelector('.slider-control--prev');
const featuredNextButton = document.querySelector('.slider-control--next');

if (featuredSlider && featuredPrevButton && featuredNextButton) {
  const featuredCards = Array.from(
    featuredSlider.querySelectorAll('.product-card')
  );

  let currentSlide = 0;

  function getVisibleCardsCount() {
    if (window.innerWidth <= 480) {
      return 1;
    }

    if (window.innerWidth <= 768) {
      return 2;
    }

    return 4;
  }

  function getSlideStep() {
    if (featuredCards.length === 0) {
      return 0;
    }

    const cardWidth = featuredCards[0].getBoundingClientRect().width;
    const sliderStyles = window.getComputedStyle(featuredSlider);
    const gap = Number.parseFloat(sliderStyles.columnGap) || 0;

    return cardWidth + gap;
  }

  function updateCarousel(behavior = 'smooth') {
    const visibleCards = getVisibleCardsCount();
    const maxSlide = Math.max(
      0,
      featuredCards.length - visibleCards
    );

    if (currentSlide > maxSlide) {
      currentSlide = maxSlide;
    }

    featuredSlider.scrollTo({
      left: currentSlide * getSlideStep(),
      behavior,
    });
  }

  featuredNextButton.addEventListener('click', () => {
    const visibleCards = getVisibleCardsCount();
    const maxSlide = Math.max(
      0,
      featuredCards.length - visibleCards
    );

    currentSlide = currentSlide >= maxSlide
      ? 0
      : currentSlide + 1;

    updateCarousel();
  });

  featuredPrevButton.addEventListener('click', () => {
    const visibleCards = getVisibleCardsCount();
    const maxSlide = Math.max(
      0,
      featuredCards.length - visibleCards
    );

    currentSlide = currentSlide <= 0
      ? maxSlide
      : currentSlide - 1;

    updateCarousel();
  });

  window.addEventListener('resize', () => {
    updateCarousel('auto');
  });
}


// Product modal

const productModal = document.querySelector('.product-modal');

function getProductById(productId) {
  if (typeof products === 'undefined') {
    return null;
  }

  return products.find((product) => product.id === productId);
}

function createProductModalContent(product) {
  return `
    <div
      class="product-modal__dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <button
        class="product-modal__close"
        type="button"
        aria-label="Close product details"
      >
        &times;
      </button>

      <div class="product-modal__image">
        <img
          src="${product.image}"
          alt="${product.name}, ${product.period}"
        >
      </div>

      <div class="product-modal__content">
        <p class="product-modal__meta">
          ${product.origin} · ${product.period}
        </p>

        <h2
          class="product-modal__title"
          id="product-modal-title"
        >
          ${product.name}
        </h2>

        <p class="product-modal__designer">
          ${product.designer}
        </p>

        <p class="product-modal__description">
          ${product.description}
        </p>

        <dl class="product-modal__details">
          <div class="product-modal__detail">
            <dt>Period</dt>
            <dd>${product.period}</dd>
          </div>

          <div class="product-modal__detail">
            <dt>Origin</dt>
            <dd>${product.origin}</dd>
          </div>

          <div class="product-modal__detail">
            <dt>Material</dt>
            <dd>${product.material}</dd>
          </div>
        </dl>

        <p class="product-modal__price">
          €${product.price.toLocaleString('en-US')}
        </p>
      </div>
    </div>
  `;
}

function openProductModal(product) {
  if (!productModal) {
    return;
  }

  productModal.innerHTML = createProductModalContent(product);

  productModal.classList.add('product-modal--open');
  productModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const closeButton = productModal.querySelector(
    '.product-modal__close'
  );

  if (closeButton) {
    closeButton.focus();
  }
}

function closeProductModal() {
  if (!productModal) {
    return;
  }

  productModal.classList.remove('product-modal--open');
  productModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

if (catalogGrid && productModal) {
  catalogGrid.addEventListener('click', (event) => {
    const card = event.target.closest('.catalog-card');

    if (!card) {
      return;
    }

    const product = getProductById(card.dataset.productId);

    if (product) {
      openProductModal(product);
    }
  });

  productModal.addEventListener('click', (event) => {
    if (
      event.target === productModal
      || event.target.closest('.product-modal__close')
    ) {
      closeProductModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape'
      && productModal.classList.contains('product-modal--open')
    ) {
      closeProductModal();
    }
  });
}