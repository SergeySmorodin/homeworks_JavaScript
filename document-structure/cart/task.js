document.addEventListener('DOMContentLoaded', () => {
  const cart = document.querySelector('.cart');
  const cartTitle = document.querySelector('.cart__title');
  const cartProducts = document.querySelector('.cart__products');
  const products = document.querySelectorAll('.product');

  // Показать/скрыть корзину
  const toggleCartVisibility = () => {
    const hasProducts = cartProducts.children.length > 0;
    cart.style.display = hasProducts ? 'block' : 'none';
  };

  toggleCartVisibility();

  products.forEach(product => {
    const decButton = product.querySelector('.product__quantity-control_dec');
    const incButton = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');
    const addButton = product.querySelector('.product__add');
    const productId = product.dataset.id;
    const productImage = product.querySelector('.product__image').src;

    // Уменьшение количества
    decButton.addEventListener('click', () => {
      const value = parseInt(quantityValue.textContent);
      quantityValue.textContent = value > 1 ? value - 1 : 1;
    });

    // Увеличение количества
    incButton.addEventListener('click', () => {
      quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
    });

    // Добавление в корзину
    addButton.addEventListener('click', () => {
      addToCart(productId, productImage, parseInt(quantityValue.textContent));
    });
  });

  // Функция для добавления товара в корзину
  const addToCart = (id, imageSrc, quantity) => {
    const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

    // Обновляем корзину в зависимости от наличия товара
    existingProduct
      ? updateProductCount(existingProduct, quantity)
      : createNewProduct(id, imageSrc, quantity);

    toggleCartVisibility();
  };

  const updateProductCount = (productElement, quantityToAdd) => {
    const countElement = productElement.querySelector('.cart__product-count');
    countElement.textContent = parseInt(countElement.textContent) + quantityToAdd;
  };

  const createNewProduct = (id, imageSrc, quantity) => {
    const productHTML = `
      <div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${imageSrc}">
        <div class="cart__product-count">${quantity}</div>
        <button class="cart__product-remove">&times;</button>
      </div>
    `;
    cartProducts.insertAdjacentHTML('beforeend', productHTML);

    // Удаления товара
    const newProduct = cartProducts.lastElementChild;
    newProduct.querySelector('.cart__product-remove').addEventListener('click', () => {
      newProduct.remove();
      toggleCartVisibility();
    });
  };
});
