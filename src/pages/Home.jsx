import React from 'react'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'

const Home = () => {
    //Beauty, furniture, watches, mobile-acessories,tablets,laptops,sunglasses,fragrances, skin-care, smartphones

    const Categories=[
        {
            name: "Beauty",
            imageUrl: "/Categories/Beauty-Background.jpg"
        },
        {
            name: "Fragrances",
            imageUrl: "/Categories/Fragrance-Background.jpeg"
        },
        {
            name: "Furniture",
            imageUrl: "/Categories/Furniture-Background.webp"
        },
        {
            name: "Laptops",
            imageUrl: "/Categories/Laptops-Background.jpeg"
        },
        {
            name: "Mobile-Accessories",
            imageUrl: "/Categories/MA-Background.jpeg"
        },
        {
            name: "Skin-Care",
            imageUrl: "/Categories/SkinC-Background.jpg"
        },
        {
            name: "Smartphones",
            imageUrl: "/Categories/Smartphone-Background.jpg"
        },
        {
            name: "Sunglasses",
            imageUrl: "/Categories/Sunglasses-Background.webp"
        },
        {
            name: "Tablets",
            imageUrl: "/Categories/Tablets-Background.webp"
        },
        {
            name: "Mens-Watches",
            imageUrl: "/Categories/Watches-Background.webp"
        }
    ]


  return (
    <div className='flex flex-wrap p-6 justify-center items-center gap-6'>
    {Categories.map((category) => <CategoryCard name={category.name} imageUrl={category.imageUrl} />)}
      {/* <ProductCard /> */}
    </div>
  )
}

export default Home
