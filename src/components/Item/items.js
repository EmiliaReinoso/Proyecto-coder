export const products = [
    { id: 1, foto: '/img/1.jpg', categoria: 'remeras', name: "VueJs", price: 500},
    { id: 1, foto: '/img/2.jpg', categoria: 'remeras', name: "Angular", price: 500},
    { id: 1, foto: '/img/3.jpg', categoria: 'remeras', name: "React", price: 500},
    { id: 1, foto: '/img/4.jpg', categoria: 'remeras', name: "Redux", price: 500},
    { id: 1, foto: '/img/5.jpg', categoria: 'remeras', name: "Node.js", price: 500},
];

export const traerProductos = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve(products)
    }, 2000)
});