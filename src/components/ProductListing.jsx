import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/Products.context';
import ProductCard from './ProductCard';

const ProductListing = () => {
    const { Products } = useContext(ProductContext);
    const [productCards, setProductCards] = useState([]);

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
        <div className='flex p-9 flex-wrap gap-6 items-center'>
            {productCards.length > 0 && productCards }
        </div>
    );
}

export default ProductListing;
