import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from '../API'
import Header from "../Header"
import ProductItem from "../ProductItem"
import './index.css'

const CategoryProducts = () =>{
    const [productsList, setProductsList] = useState([])
    const {categoryType} = useParams()

    const getProductsList = async() => {
        try{
            const response = await axios.get(`/products/category/${categoryType}`)
            setProductsList(response.data)
        }
        catch(error){

        }
    }

    useEffect(()=>{
        getProductsList()
    },[])

    return (
        <div>
            <Header/>
            <ul className="products-container">
            {productsList.map(eachItem =>
                <ProductItem details={eachItem} key={eachItem.id}/>
                )}
            </ul>
        </div>
    )
}

export default CategoryProducts