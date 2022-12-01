import { useEffect, useState,useContext } from "react"
import {useParams} from "react-router-dom"
import Header from "../Header"
import axios from "../API"
import './index.css'
import CartContext from "../../context/cart-context"

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
    failure: 'FAILURE',
  }

const ProductDetails = () => {
    const ctx = useContext(CartContext)
    console.log(ctx)

    const {productId} = useParams()
    const [productDetails,setProductDetails] = useState()
    if(productDetails!==undefined){
        var {id,title,price,description,image,rating} = productDetails
        var {rate,count} = rating
    }

    const getProductDetails =async () => {
        try{
            const response = await axios.get(`/products/${productId}`)
            setProductDetails(response.data)
        }
        catch(error){
        }
    }

    useEffect(()=>{
        getProductDetails()
    },[])

    const addToCartHandler = () => {
        ctx.setCartItems(productDetails)
    }

    return(
        <div className="home-bg-container">
            <Header/>
            {productDetails!==undefined && 
            <div className="product-details-container">
                <img className="product-image" src={image} alt="img"/>
                <div className="text-card">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <h5>Price : {price} Rs/-</h5>
                    <h5>Rating : {rate} && Count : {count}</h5>
                    <button onClick={addToCartHandler} className="btn">Add to cart</button>
                </div>
            </div>}
        </div>
    )
}

export default ProductDetails