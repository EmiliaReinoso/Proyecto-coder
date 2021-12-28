import { useCartContext } from "../context/CartContext";


function Cart() {
    const { cartList, borrarCarrito } = useCartContext()

    return (
        <div>
            { cartList.map(item=> <li>{item.name} {item.cantidad}</li>)}
            <button onClick={borrarCarrito}>Vaciar Carrito</button>
        </div>
    )


}

export default Cart;