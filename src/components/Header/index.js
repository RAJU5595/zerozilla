import './index.css'

const Header = () => {
    return(
    <div className='header-container'>
        <img className="icon" src='/android-logo-png-transparent-images-and-icons-17.png' alt="logo"/>
        <input className='input-container' type="search"/>
        <div>
            <img className="icon" src='/cart.png' alt='cart'/>
            <img className="icon" src='/profile.png' alt='profile'/>
        </div>
    </div>
    )
}

export default Header