import { useState, useEffect } from 'react';
import Create from './Create';
import Card from './Card';

const Gallery = () => {
  let [isLoaded, setIsLoaded] = useState(false);
  // let productData = [];
  let [productData, setProductData] = useState(null);

  

  useEffect(() => {
    setInterval(() => setIsLoaded(true), 1000);

    // Calling API
    fetch('https://fakestoreapi.com/products?limit=100')
      .then((data) => {
        console.log(data);
        return data.json();
      })
        .then((jsonData) => setProductData(jsonData))
        .catch(error => console.log(error));
  }, []);

//   
function Delete(id){
    let filterData=productData.filter((prod)=>prod.id!=id);
    setProductData(filterData)
}
  return(
    <div>
        {isLoaded  ? (
            productData && (
                <>
                <Create />    
                <div className='card-container'>
                    {productData.map((product) => (
                        <div className='card' key={product.id}>
                            <h1>{product.title}</h1>
                            <img src={product.image}
                            className='image-container' />
                            <h2>${product.price}</h2>
                            <button onClick={()=>Delete(product.id)}>Delete</button>
                        </div>
                    ))}
                </div>
                </>
            )        
        ):(
            
            <h1>Loading....</h1>
        ) 
        }
    </div>
  )
};

export default Gallery;