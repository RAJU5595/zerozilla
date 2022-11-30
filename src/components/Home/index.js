import { useState,useEffect } from "react"
import Header from "../Header"
import axios from '../API'

import './index.css'

const Home = () => {

    const [categoriesList , setCategoriesList] = useState([])

    const getCategoriesList = async () => {
        try{
            const response = await axios.get('/products/categories')
            setCategoriesList(response.data)
        }
        catch(error){

        }
    }

    useEffect(()=>{
        getCategoriesList()
    },[])

    return(
        <div>
            <Header/>
            <ul className="categeries-container">
                {categoriesList.map(eachItem =>
                    <li className="category-item" key={eachItem}> <a href={`/category/${eachItem}`}>{eachItem}</a></li>
                    )}
            </ul>
        </div>
    )
}

export default Home