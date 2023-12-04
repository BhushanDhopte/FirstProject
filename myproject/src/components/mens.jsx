import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Mens(){
    const router = useNavigate();
    const [sort, setSort] = useState("");
    console.log(sort, "sort")

    const[product,setproduct]=useState([]);

   async function getproduct(){
        try{
            const response= await axios.get("https://fakestoreapi.com/products")
            setproduct(response.data)
        }
        catch(error){
              console.log(error)
        }

    }
 useEffect(()=>{
    getproduct()
 },[sort])

    return(
        <div style={{backgroundColor:'rgb(244, 204, 176)',width:"100%"}}>
            <h1>Mens </h1>
            <div>
                <h2>Sorting</h2>
                <select onChange={(event) => setSort(event.target.value)}>
                    {/* <option>Select</option> */}
                    <option value='asc'>Ase</option>
                    <option value='desc'>Dese</option>
                </select>
            </div>
            <div  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {product.map((product) => (
                   <div onClick={() => router(`/single-product/${product.id}`)} style={{ width: "17%", border: '2px solid black', height: "400px", marginBottom: '40px', cursor:"pointer" }}>
                        <img style={{ height: "60%", width: "90%", margin: 'auto' }} src={product.image} />
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mens;