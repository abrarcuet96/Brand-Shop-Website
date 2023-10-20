import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmojiEvents } from 'react-icons/md';
import { AuthContext } from "../Provider/AuthProvider";

const RegistrationSection = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setRegisterError('Your password should have at least one upper case character');
            return;
        }
        else if (!/^(?=.*[\W_]).+$/.test(password)) {
            setRegisterError('Your password should have at least one special character');
            return;
        }
        createUser(name, email, password)
            .then(res => {
                console.log(res.user);
                setSuccess('User created successfully');
            })
            .catch(err => {
                console.log(err);
                setRegisterError(err.message);
            })
    }

    return (
        <div className="hero min-h-screen my-12" style={{ backgroundImage: 'url(https://i.ibb.co/L0zZn8G/bags-with-gifts-top-copy-space.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-300 rounded-none">
                            <h2 className="text-4xl text-center text-black font-semibold my-5">Please Register!!</h2>
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <p className="text-center text-black">Already have an account? <Link className="font-semibold text-purple-600" to="/login">Login</Link></p>
                                {
                                    registerError && <p className="text-red-600 text-center">{registerError}</p>
                                }
                                {
                                    success && <p className="text-green-600 text-center">{success}</p>
                                }
                            </form>
                        </div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-center">Our Goal</h1>
                            <p className="py-6 text-justify">At Brand-Shop, our mission is to empower technology enthusiasts by providing them with access to the latest and most innovative tech products. We aim to offer a one-stop destination where customers can discover, explore, and acquire cutting-edge technology, electronics, and gadgets. Our goal is to foster a tech-savvy community that stays at the forefront of innovation and experiences the future today. We are committed to delivering high-quality products, exceptional customer service, and a seamless shopping experience, making us the go-to choice for all your tech needs.</p>
                            <div className="flex gap-2 items-center justify-center">
                                <div>
                                    <MdOutlineEmojiEvents></MdOutlineEmojiEvents>
                                </div>
                                <p>we have served about 1200 peoples all around the country</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSection;