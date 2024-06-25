import {products} from "./products.js";
import {getProduct} from "./products.js";


export let cart = JSON.parse(localStorage.getItem('cart'));

//ЕСЛИ КОРЗИНА ПУСТАЯ ТО ДОБАВЛЯЕМ В КОРЗИНУ ПО УМОЛЧАНИЮ 2 ТОВАРА
if(!cart){
    cart=[
        {
            id:'1',
            quantity: 2,

        },
        {
            id:'2',
            quantity: 1,

        }
    ];
}


function saveToStorage() {

    localStorage.setItem('cart', JSON.stringify(cart));
}
//ФУНКЦИЯ ДОБАВЛЕНИЯ ТОВАРА В КОРЗИНУ

export function addToCart(productId) {
    let matchingProduct;
cart.forEach((cartProduct)=>{
    if(cartProduct.id===productId){
        matchingProduct=cartProduct;
    }
})
    if (matchingProduct) {
        matchingProduct.quantity++;
    } else {
        cart.push({
            id: productId,
            quantity: 1,
        });
    }
    saveToStorage();

}

//ЗАПОЛНЕНИЕ КОРЗИНЫ
let cartHTML = "";
cart.forEach((item) => {
    const productId = item.id;
    const matchingProduct = getProduct(productId);



    cartHTML = cartHTML + `
            <div class="cart__container js__cart-container-${matchingProduct.id}">
                <div class="cart__info">
                    <ul class="cart__info-list">
                        <li class="cart-info-item">Цена: ${matchingProduct.price}</li>
                        <li class="cart-info-item">Количество: ${item.quantity}</li>
                        <li class="cart-info-item">Название: ${matchingProduct.name}</li>
                    </ul>
                </div>
                <div class="cart__products">
                    <img src="${matchingProduct.img}" alt="">
                </div>
                <button class="js__delete-button btn" data-product-id="${matchingProduct.id}">DELETE</button>
            </div>
             
            `;
});


if (document.querySelector('.cart__section')) {
    document.querySelector('.cart__section').innerHTML = cartHTML;
    }

function showTotalPrice() {
    let sum = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.id);
        let priceWithoutSeparator = parseFloat(product.price.replace(/\s/g, ''));
        sum += priceWithoutSeparator * cartItem.quantity;
        console.log(typeof priceWithoutSeparator);
    });

    const html = `Total: ${sum} руб.`;

    if (document.querySelector('.total__price')) {
        document.querySelector('.total__price').innerHTML = html;
    }
}

showTotalPrice();



//ФУНКЦИЯ УДАЛЕНИЯ ТОВАРА ИЗ КОРЗИНЫ
function deleteFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.id!=productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;
    saveToStorage();
    showTotalPrice();

}
//УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
document.querySelectorAll('.js__delete-button').forEach((button)=>{
    button.addEventListener('click', ()=>{
        const productId=button.dataset.productId;
        deleteFromCart(productId);
        const container=document.querySelector(`.js__cart-container-${productId}`);
        container.remove();

    });
});


//БУРГЕР МЕНЮ
if (window.location.href.includes("cart.html")){
    const menu = document.querySelector('.header__links-list');
    const menuBtn = document.querySelector('.burger__menu');
    const mainWrapper = document.querySelector('.main__wrapper');
    const body = document.body;
    if(menu&&menuBtn){
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active__burger-list');
            menuBtn.classList.toggle('active-burger');
            body.classList.toggle('scroll-lock');
            mainWrapper.classList.toggle('scroll-lock');
        });
    }
}









