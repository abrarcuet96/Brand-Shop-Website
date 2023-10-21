import PropTypes from 'prop-types';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
const CartItem = ({ item, cartItems, setCartItems }) => {
    const { _id, photo, name, price } = item;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const URL = `https://my-brand-shop-server-bgw2wftzx-abrars-projects-bbcef6d7.vercel.app/cartProducts/${id}`;
                fetch(URL, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'success!',
                                text: 'Product deleted successfully',
                                icon: 'Success',
                                confirmButtonText: 'Cool'
                            })
                            const remainingProducts = cartItems.filter(product => product._id !== id);
                            setCartItems(remainingProducts);
                        }
                    })
            }
        })

    }
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">


            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={photo} alt=""></img>
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
                <div className='flex justify-end'>
                    <button onClick={() => handleDelete(_id)} className="text-white text-2xl hover:text-red-500"><MdDeleteOutline></MdDeleteOutline></button>
                </div>
            </div>


        </div>
    );
};
CartItem.propTypes = {
    item: PropTypes.object,
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func
}
export default CartItem;