import React from 'react'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'

const Home = () => {
    //Beauty, furniture, watches, mobile-acessories,tablets,laptops,sunglasses,fragrances, skin-care, smartphones

    const Categories=[
        {
            id: 1,
            name: "Beauty",
            imageUrl: "/Categories/Beauty-Background.jpg"
        },
        {
            id: 2,
            name: "Fragrances",
            imageUrl: "/Categories/Fragrance-Background.jpeg"
        },
        {
            id: 3,
            name: "Furniture",
            imageUrl: "/Categories/Furniture-Background.webp"
        },
        {
            id: 4,
            name: "Laptops",
            imageUrl: "/Categories/Laptops-Background.jpeg"
        },
        {
            id: 5,
            name: "Mobile-Accessories",
            imageUrl: "/Categories/MA-Background.jpeg"
        },
        {
            id: 6,
            name: "Skin-Care",
            imageUrl: "/Categories/SkinC-Background.jpg"
        },
        {
            id: 7,
            name: "Smartphones",
            imageUrl: "/Categories/Smartphone-Background.jpg"
        },
        {
            id: 8,
            name: "Sunglasses",
            imageUrl: "/Categories/Sunglasses-Background.webp"
        },
        {
            id: 9,
            name: "Tablets",
            imageUrl: "/Categories/Tablets-Background.webp"
        },
        {
            id: 10,
            name: "Mens-Watches",
            imageUrl: "/Categories/Watches-Background.webp"
        }
    ]


  return (
    <div className='flex flex-wrap p-6 justify-center items-center gap-6'>
    {Categories.map((category) => <CategoryCard key={category.id} name={category.name} imageUrl={category.imageUrl} />)}
      {/* <ProductCard /> */}
    </div>
  )
}

export default Home
