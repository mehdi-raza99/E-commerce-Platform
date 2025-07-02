import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/Products.context';
import ProductCard from './ProductCard';
import { fetchProductByCategory } from '../utils/fetchProductsByCategory';



const ProductListing = () => {
    const { Products,setProducts } = useContext(ProductContext);
    const [productCards, setProductCards] = useState([]);

    const {category}=useParams()
    

    useEffect(() => {
        async function fetchData() {
            const data=await fetchProductByCategory({category})
            setProducts(data);
        }
        fetchData()
          

        return () => setProducts([])
    },[])


    useEffect(() => {
        
        if (Products) {
            const cards = Products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    id={product.id} 
                    description={product.description} 
                    brand={product.brand} 
                    price={product.price} 
                    rating={product.rating} 
                    image={product.images}
                />
            ));
            setProductCards(cards);
        }
    }, [Products]);

    return (
        <div className='flex flex-wrap gap-6 items-center min-h-[calc(100vh-136px)] p-11 pl-32'>
            {productCards.length > 0 && productCards }
        </div>
    );
}

export default ProductListing;
