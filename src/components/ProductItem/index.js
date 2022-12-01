import { Link } from 'react-router-dom'
import './index.css'

const ProductItem = (props) => {
    const {details} = props
    const {id,category,image,title} = details

    return (
        <Link  className="product-container" to={`/category/${category}/${id}`}>
            <li className="product-container-inner">
                <img className="product-image" src={`${image}`}/>
                <h5 className='product-title'>{title}</h5>
            </li>
        </Link>
    )
} 

export default ProductItem