import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ img, price, id }) => {
    return (
        <div>
            <Link to={`/item/${id}`}>
                <img src={img} alt='producto'/>
            </Link>
            <p>${price}</p>
        </div>
    )
};    
export default Item;