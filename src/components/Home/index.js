import { useState,useEffect } from "react"
import {TailSpin} from 'react-loader-spinner'
import Header from "../Header"
import axios from '../API'

import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
    failure: 'FAILURE',
  }

const Home = () => {

    const [categoriesList , setCategoriesList] = useState([])
    const [apiStatus,setApiStatus] = useState(apiStatusConstants.initial)

    const getCategoriesList = async () => {
        try{
            setApiStatus(apiStatusConstants.inProgress)
            const response = await axios.get('/products/categories')
            setCategoriesList(response.data)
            setApiStatus(apiStatusConstants.success)
        }
        catch(error){
            setApiStatus(apiStatusConstants.failure)
        }
    }

    useEffect(()=>{
        getCategoriesList()
    },[])

    return(
        <div className="home-bg-container">
            <Header/>
            {apiStatus === apiStatusConstants.inProgress ? <div className="spin-container"><TailSpin/></div> : 
             <ul className="categeries-container">
             {categoriesList.map(eachItem =>
                 <li className="category-item" key={eachItem}> <a className="category-link" href={`/category/${eachItem}`}>{eachItem}</a></li>
                 )}
            </ul>
            }
        </div>
    )
}

export default Home