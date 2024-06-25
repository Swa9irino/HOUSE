import {products} from "./products.js";
import {cart, addToCart} from "./cart.js";

const homeLink = document.getElementById('home');
const homePage = document.getElementById('home__section');
const cartLink = document.getElementById('cart');
const countryButton = document.querySelectorAll('.js-country');
let country = "Франция";


let sum = (a, b) => a + b
console.log(sum(1, 2));


// ФУНКЦИЯ ПОКАЗА КАРТИН В ЗАВИСИМОСТИ ОТ СТРАНЫ
function showPictures(country) {
    let productHTML = " ";
    products.forEach((product) => {
        if (product.country === country) {
            productHTML = productHTML + ` <li class="catalog__list-item">
                    <img src="${product.img}" alt="${product.name}">
                    <div class="item__info">
                        <span class="author__name">${product.author}</span>
                        <h3 class="picture__name">${product.name}</h3>
                        <span class="picture__details">${product.details} </span>
                        <div class="picture__price">${product.price} руб</div>
                        <button class="add btn" data-product-id="${product.id}">В корзину</button>
                    </div>
                </li>`;
        }
    });

    document.querySelector('.catalog__list').innerHTML = productHTML;

    // Переустанавливаю обработчики событий на кнопках "В корзину" потому что онис слетают при смене страны
    document.querySelectorAll('.add').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
        });
    });
}

// ДЕФОЛТНАЯ СТРАНА
showPictures(country);

// ПОКАЗ КАРТИН В ЗАВИСИМОСТИ ОТ СТРАНЫ
countryButton.forEach((button) => {
    button.addEventListener('click', () => {

        country = button.dataset.country;
        showPictures(country);
    })
})

countryButton.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляю класс 'active' у всех кнопок
        countryButton.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('js__country-item');
        });

        // Добавляю класс 'active' к кнопке, на которую нажали
        button.classList.add('active');
        button.classList.remove('js__country-item');
    });
});


homeLink.addEventListener('click', () => {
    //homePage.style.display = 'block';
    //cartPage.style.display = 'none';
});

cartLink.addEventListener('click', () => {
    //homePage.style.display = 'none';
    //cartPage.style.display = 'block';
});


//БУРГЕР МЕНЮ
const menu = document.querySelector('.header__links-list');
const menuBtn = document.querySelector('.burger__menu');
const mainWrapper = document.querySelector('.main__wrapper');
const body = document.body;
if(menu&&menuBtn){
    menuBtn.addEventListener('click', () => {
       menu.classList.toggle('active__burger-list');
       menuBtn.classList.toggle('active-burger');
       body.classList.toggle('scroll-lock');
       
    });
}

const link=document.querySelectorAll('.nav__link')

link.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menu.classList.remove('active__burger-list');
        menuBtn.classList.remove('active-burger');
        body.classList.remove('scroll-lock');

    })
})



