export const products = [
    {
        name: 'VueJs',
        price: 800,
        stock: 15,
        id: 1,
        img: '/img/1.jpg',
        category: 'remeras',
        description:
            'Remera de algodon con estampa de VueJs',
    },
    {
        name: 'Angular',
        price: 750,
        stock: 5,
        id: 2,
        img: '/img/2.jpg',
        category: 'remeras',
        description:
            'Remera de algodon con estampa de Angular',
    },
    {
        name: 'React',
        price: 850,
        stock: 4,
        id: 3,
        img: '/img/3.jpg',
        category: 'remeras',
        description:
            'Remera de algodon con estampa de React',
    },
    {
        name: 'Redux',
        price: 780,
        stock: 20,
        id: 4,
        img: '/img/4.jpg',
        category: 'remeras',
        description:
            'Remera de algodon con estampa de Redux',
    },
    {
        name: 'Node.js',
        price: 800,
        stock: 8,
        id: 5,
        img: '/img/5.jpg',
        category: 'remeras',
        description:
            'Remera de algodon con estampa de Node.js',
    },   
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});
