import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';


function ItemDetail ({ item }) {    
    const [count, setCount] = useState(0)

    const {cartList, agregarAlCarrito}= useCartContext()

    function onAdd (cant) {
        console.log(cant)
        setCount(true)
        agregarAlCarrito({...item, cantidad:cant})
    }
    console.log(cartList)
        
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px',
            }}
        >
            <div>
                <img
                    width={400}
                    src={item.img}
                    alt="img"
                    style={{ margin: '10px' }}
                />
            </div>
            <div style={{ width: '50%' }}>
                <h2>{item.name}</h2>
                <h3>$ {item.price}</h3>
                <h4 style={{ width: '70%' }}>{item.description}</h4>
                <Link to="/">Volver a la tienda</Link>
            </div>
            {!count ? (
                <ItemCount stock={item.stock} onAdd={onAdd} />
            ) : (
                <Link to="/cart">Ir al carrito</Link>
            )}
        </div>
    );
};

export default ItemDetail;
