import { Link } from "react-router-dom";
import { fetchProductByCategory } from "../utils/fetchProductsByCategory";
import { useContext } from "react";
import { ProductContext } from "../context/Products.context";

const CategoryCard = ({ name, imageUrl }) => {
  let category=name.toLowerCase()
  // console.log(LowerCaseName);

  const {setProducts}=useContext(ProductContext)
  
    async function handleClick () {
      const data=await fetchProductByCategory({category})
      console.log(data);
      
      setProducts(data);      
    }


    return (
      <Link to={category}>
        <div className='h-[400px] w-[400px] rounded-2xl overflow-hidden cursor-pointer' onClick={handleClick}>
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
          >
            <span className="backdrop-blur-3xl p-7 rounded-3xl font-extrabold text-2xl text-cyan-950 tracking-wider">{name}</span>
          </div>
        </div>
      </Link>
    );
  };
  

export default CategoryCard  