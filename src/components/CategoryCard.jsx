import { Link } from "react-router-dom";

const CategoryCard = ({ name, imageUrl }) => {
  let category=name.toLowerCase()


    return (
      <Link to={category}>
        <div className='h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-2xl overflow-hidden cursor-pointer'>
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