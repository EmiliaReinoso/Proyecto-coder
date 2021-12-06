import React, { useState } from 'react'

const ItemCount = ({ max, inicial}) => {
    
    const [value, setValue] = useState (inicial)

    const handleSuma = () => {
        value < max ? setValue (prev => prev + 1) : alert ('Compra máxima')
    }
    const handleResta = () => {
       value > inicial ? setValue (prev => prev - 1) : alert ('compra mínima')
    }


    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleSuma}>+</button>
            <button onClick={handleResta}>-</button>
        </div>
    )
}
export default ItemCount