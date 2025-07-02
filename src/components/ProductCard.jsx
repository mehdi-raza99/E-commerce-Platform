import React, { useContext } from 'react'
import { CartContext } from '../context/Cart.context'


const ProductCard = ({id,brand,image,description,price,rating}) => {
    const {addItemToCart}=useContext(CartContext)
        
    function handleClick(){
        addItemToCart({id,brand,image,description,price})
    }
    //id,brand,image,description,price,rating5
    return (
        

    <div className="h-[550px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <img className=" h-[220px] w-[220px] rounded-t-lg self-center" src={image[0]} alt="" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <p className="mb-3 font-normal text-amber-50">{price}$</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-red-400">Rating: {rating}</p>
            <button className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>
                Add to Cart
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
    </div>

    )
}

export default ProductCard
