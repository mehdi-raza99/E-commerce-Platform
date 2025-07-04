import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { fetchProductByCategory } from '../utils/fetchProductsByCategory';
import { setProducts } from '../store/product/product.action';
import { selectProducts } from '../store/product/product.selector';

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { category } = useParams();
  const validCategories = ["beauty", "fragrances", "furniture", "laptops","mobile-accessories","skin-care","smartphones","sunglasses","tablets","mens-watches"];
  if (!validCategories.includes(category)) {
        return <div className='min-h-[calc(100vh-136px)]'>
            <h1 className='p-11 pl-96 font-extrabold text-3xl'>Not Found</h1>
        </div>;
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const data = await fetchProductByCategory({ category });
      if (isMounted) dispatch(setProducts(data));
    }

    fetchData();

    // Optional: Clear products on unmount if necessary
    return () => {
      isMounted = false;
      dispatch(setProducts([])); // Optional — remove if not critical
    };
  }, [category, dispatch]); // include category

  return (
    <div className='flex flex-wrap gap-6 items-center min-h-[calc(100vh-136px)] p-11 pl-32'>
      {products.length > 0 && (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            description={product.description}
            brand={product.brand}
            price={product.price}
            rating={product.rating}
            image={product.images}
          />
        ))
      )}
    </div>
  );
};

export default ProductListing;
