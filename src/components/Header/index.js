import { useContext } from 'react'
import CartContext from '../../context/cart-context'
import './index.css'

const Header = () => {
    const ctx = useContext(CartContext)
    let count=0
    ctx.cart.map(eachItem => count+=eachItem.quantity)

    return(
    <div className='header-container'>
        <img className="icon" src='/android-logo-png-transparent-images-and-icons-17.png' alt="logo"/>
        <input className='input-container' type="search"/>
        <div className='cart-container'>
            <img className="icon" src='/cart.png' alt='cart'/>
            {count!=0 && <p className='cart-count'>{count}</p>}
            <img className="icon" src='/profile.png' alt='profile'/>
        </div>
    </div>
    )
}

export default Header