import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ img, id }) => {
    return (
        <div className='col-md-4'>
            <div className="card w-100 mt-5">
                <Link to={`/item/${id}`}>
                    <img width="200px" src={img} alt="producto" />
                    <button className="btn btn-outline-primary btn-block">Detalle del producto</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;