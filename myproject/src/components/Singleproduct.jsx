import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleProduct = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const router = useNavigate();

    async function getSingleProductData() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            // console.log(response.data, "response for single product")
            setProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) {
            getSingleProductData();
        }
    }, [id])

    return (
        <div>
            <img style={{width:"300px",paddingLeft:"500px"}} src={product.image} />
            <h1 style={{paddingLeft:"300px"}}>Name : {product.title}</h1>
            <h2 style={{paddingLeft:"560px"}}>Price : {product.price}</h2>
            <button onClick={() => router('/cart')} style={{marginLeft:"580px", color:"orange"}}>Add to cart </button>
        </div>
    )
}

export default SingleProduct