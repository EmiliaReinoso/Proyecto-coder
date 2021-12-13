const productos = [
    { id: 1, foto: 'img/1', categoria: 'remeras', name: "VueJs", price: 500},
    { id: 1, foto: 'img/2', categoria: 'remeras', name: "Angular", price: 500},
    { id: 1, foto: 'img/3', categoria: 'remeras', name: "React", price: 500},
    { id: 1, foto: 'img/4', categoria: 'remeras', name: "Redux", price: 500},
    { id: 1, foto: 'img/4', categoria: 'remeras', name: "Node.js", price: 500},
];

export const getFetch = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
})