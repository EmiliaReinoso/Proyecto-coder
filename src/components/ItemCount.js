import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd}) => {
    
    const [number, setNumber] = useState (1);

    const add = () => {
        number !== stock && setNumber (prev => prev + 1);
    }
    const substract = () => {
       number !== 0 && setNumber(prev => prev - 1);
    }

    return (
        <div>
            <p>{number}</p>
            <div>
                <button onClick={add} disabled={number === stock}>+</button>
                <button onClick={substract}>-</button>
                <button disabled={number === 0} onClick={() => onAdd(number)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount;