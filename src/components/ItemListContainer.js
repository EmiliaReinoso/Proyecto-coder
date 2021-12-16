import { useState, useEffect} from 'react'
import { getFetch } from "../getFetch"

function ItemListContainer ( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [])


    function handlerClick() {
        setLoading(!loading)
    }
    

    
    return (
        <div>
            { greeting }
            {loading ? 
            <h2>Cargando...</h2> :
            productos.map((prod) => 
                    <div className='col-md-4'>
                        <div className="card w-100 mt-5">
                                <div className="card-header">
                                {`${prod.name} - ${prod.categoria}`}
                            </div>
                            <div className="card-body">
                                <img src= {`${prod.foto}`} alt='' className='w-50'/>
                                {`${prod.price}`}
                            </div>
                            <div className="card-footer">
                                    <button className='btn btn-outline-primary btn-block'>
                                        Detalle del producto
                                    </button>
                            </div>
                        </div>
                    </div>
                )
            }    
            <button onClick={handlerClick}>Click</button>
        </div>
        
    )
}


export default ItemListContainer
