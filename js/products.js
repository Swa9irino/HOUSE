
export function getProduct(productId){
    let matchingProduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    return matchingProduct;
}


export const products =
    [
        {
            id: '1',
            name: "Охота Амура",
            price: 14500,
            author: "Марсель Руссо",
            details: "Холст, масло (50х80)",
            country: "Франция",
            img:"asssets/pictures/France/Russo.png"
        },

        {
            id: '2',
            name: "Дама с собачкой",
            price: 16500,
            author: "Анри Селин",
            details: "Акрил, бумага (50х80)",
            country: "Франция",
            img:"asssets/pictures/France/Selin.png"
        },

        {
            id: '3',
            name: "Процедура",
            price: 20000,
            author: "Франсуа Дюпон",
            details: "Цветная литография (40х60)",
            country: "Франция",
            img:"asssets/pictures/France/Dupon.png"
        },

        {
            id: '4',
            name: "Роза",
            price: 12000,
            author: "Луи Детуш",
            details: "Бумага, акрил (50х80)",
            country: "Франция",
            img:"asssets/pictures/France/Detush.png"
        },

        {
            id: '5',
            name: "Птичья трапеза",
            price: 22500,
            author: "Франсуа Дюпон",
            details: "Цветная литография (40х60)",
            country: "Франция",
            img:"asssets/pictures/France/Dupon2.png"
        },

        {
            id: '6',
            name: "Пейзаж с рыбой",
            price: 20000,
            author: "Пьер Моранж",
            details: "Цветная литография (40х60)",
            country: "Франция",
            img:"asssets/pictures/France/Moranzh.png"
        },
        {
            id: '7',
            name: "Над городом",
            price: 16000,
            author: "Курт Вернер",
            details: "Цветная литография (40х60)",
            country: "Германия",
            img:"asssets/pictures/Germany/Verner.png"
        },
        {
            id: '8',
            name: "Птенцы",
            price: 14500,
            author: "Макс Рихтер",
            details: "Холст, масло (50х80) ",
            country: "Германия",
            img:"asssets/pictures/Germany/Rihter.png",
        },

        {
            id: '9',
            name: "Среди листьев",
            price: 20000,
            author: "Мартин Майер",
            details: "Цветная литография (40х60)",
            country: "Германия",
            img:"asssets/pictures/Germany/Mayer.png"
        },
        {
            id: '10',
            name: "Яркая птица",
            price: 13000,
            author: "Герман Беккер",
            details: "Цветная литография (40х60)",
            country: "Германия",
            img:"asssets/pictures/Germany/Bekker.png"
        },
        {
            id: '11',
            name: "Дятлы",
            price: 20000,
            author: "Вульф Бауэр",
            details: "Бумага, акрил (50х80) ",
            country: "Германия",
            img:"asssets/pictures/Germany/Bayer.png"
        },
        {
            id: '12',
            name: "Большие воды",
            price: 23000,
            author: "Вальтер Хартманн",
            details: "Бумага, акрил (50х80) ",
            country: "Германия",
            img:"asssets/pictures/Germany/Hartman.png"
        },

        {
            id: '13',
            name: "Дикий зверь",
            price: 19500,
            author: "Пол Смит",
            details: "Акварель, бумага (50х80) ",
            country: "Англия",
            img:"asssets/pictures/England/Smith.png"
        },
        {
            id: '14',
            name: "Скалистый берег",
            price: 17500,
            author: "Джон Уайт",
            details: "Цветная литография (40х60)",
            country: "Англия",
            img:"asssets/pictures/England/White.png"
        },
        {
            id: '15',
            name: "Река и горы",
            price: 20500,
            author: "Джим Уотсон",
            details: "Акварель, бумага (50х80)  ",
            country: "Англия",
            img:"asssets/pictures/England/Wottson.png"
        },

        {
            id: '16',
            name: "Белый попугай",
            price: 15500,
            author: "Юджин Зиллион",
            details: "Цветная литография (40х60)",
            country: "Англия",
            img:"asssets/pictures/England/Zillion.png"
        },
        {
            id: '17',
            name: "Ночная рыба",
            price: 12500,
            author: "Эрик Гиллман",
            details: "Бумага, акрил (50х80) ",
            country: "Англия",
            img:"asssets/pictures/England/Gilman.png"
        },
        {
            id: '18',
            name: "Рыжий кот",
            price: 21000,
            author: "Альфред Барр",
            details: "Цветная литография (40х60)",
            country: "Англия",
            img:"asssets/pictures/England/Barr.png"
        },




    ]
products.forEach((product) => {
     product.price = product.price.toLocaleString();
});
