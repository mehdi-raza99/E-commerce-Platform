import { fetchProductByCategory } from "../utils/fetchProductsByCategory";

const CategoryCard = ({ name, imageUrl }) => {
    function handleClick () {
      fetchProductByCategory({name: name.toLowerCase()});
    }


    return (
      <div className='h-[400px] w-[400px] rounded-2xl overflow-hidden cursor-pointer' onClick={handleClick}>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
        >
          <span className="backdrop-blur-3xl p-7 rounded-3xl font-extrabold text-2xl text-cyan-950 tracking-wider">{name}</span>
        </div>
      </div>
    );
  };
  

export default CategoryCard  