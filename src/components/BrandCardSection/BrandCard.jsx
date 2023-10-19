import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { id, brand_name, brand_image, description } = brand;
    return (
        
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-900">
                <img className="object-cover w-full rounded-lg h-96 md:h-56" src={brand_image} alt=""></img>
                <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
                    <Link className="hover:text-fuchsia-600 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" to={`/brandProducts/${id}`}>{brand_name}</Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
            </div>

        
    );
};
BrandCard.propTypes = {
    brand: PropTypes.object
}
export default BrandCard;