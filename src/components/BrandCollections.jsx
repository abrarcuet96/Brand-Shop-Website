import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const BrandCollections = ({ product }) => {
    const { _id, photo, brand_name, name, price, type, rating } = product;
    
    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-900">
            <img className="object-cover w-full rounded-lg h-96 md:h-56" src={photo} alt=""></img>
            <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
                <h2 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h2>
                <h2 className=" mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Brand: {brand_name}</h2>
                <div className='flex justify-between'>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Price: $ {price}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Type: {type}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Rating: {rating}</p>
                </div>
                <div className='flex justify-end gap-2'>
                    <Link to={`/updateProducts/${_id}`}><button className='text-white text-2xl hover:text-fuchsia-500'><FiEdit></FiEdit></button></Link>
                    <Link to={`/details/${_id}`}><button className='text-white text-2xl hover:text-fuchsia-500'><BsArrowRightCircle></BsArrowRightCircle></button></Link>
                </div>
            </div>
        </div>
    );
};
BrandCollections.propTypes = {
    product: PropTypes.object
}
export default BrandCollections;