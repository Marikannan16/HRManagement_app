import React, { useState } from 'react';
import { GoUpload } from 'react-icons/go'
import { useDispatch } from 'react-redux';
import { setUserData, resetUserData } from '../Slices/userSclice';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        access: '',
        designation: '',
        modules: '',
        profilePhoto: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormState((prevState) => ({
                ...prevState,
                profilePhoto: URL.createObjectURL(file),
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserData(formState));
        alert('Please Check The Details!');
        navigate('/second-form')
    };

    const handleCancel = () => {
        dispatch(resetUserData());
        setFormState({
            username: '',
            email: '',
            password: '',
            access: '',
            designation: '',
            modules: '',
            profilePhoto: null,
        });
    };

    return (
        <div className="w-screen h-screen px-10 py-5">
            <h2 className="text-xl font-semibold text-gray-800 ms-2 text-start">Create User</h2>

            <div className="flex flex-col justify-center items-center pb-8">
                <label htmlFor="profilePhoto" className="relative cursor-pointer">
                    <div className="w-40 h-40 bg-gray-100 shadow-md rounded-full overflow-hidden flex items-center justify-center">
                        {formState.profilePhoto ? (
                            <img src={formState.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-500 text-6xl ">
                                <GoUpload />
                            </span>
                        )}
                    </div>
                    <input
                        id="profilePhoto"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>
                <p className="mt-7 text-lg font-semibold">User Profile Photo</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 px-5 gap-2 lg:grid-cols-2 lg:px-0 lg:gap-10">

                    <div>
                        <div className="mb-4 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">User Name</label>
                            <input
                                type="text"
                                name="username"
                                placeholder='Enter The User Name'
                                value={formState.username}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>


                        <div className="mb-4 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Email ID</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter The Email ID'
                                value={formState.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>


                        <div className="mb-5 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Company Access</label>
                            <select
                                name="access"
                                value={formState.access}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="">Select The Company</option>
                                <option value="Client A">Client A</option>
                                <option value="Client B">Client B</option>
                                <option value="Client C">Client C</option>
                            </select>
                        </div>
                    </div>


                    <div>
                        <div className="mb-5 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Designation</label>
                            <select
                                name="designation"
                                value={formState.designation}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="">Enter The Designation</option>
                                <option value="Branch X">Branch X</option>
                                <option value="Branch Y">Branch Y</option>
                                <option value="Branch Z">Branch Z</option>
                            </select>
                        </div>


                        <div className="mb-4 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Enter The Password'
                                value={formState.password}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>


                        <div className="mb-5 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Modules Access</label>
                            <select
                                name="modules"
                                value={formState.modules}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="">Select The Modules</option>
                                <option value="Module 1">Module 1</option>
                                <option value="Module 2">Module 2</option>
                                <option value="Module 3">Module 3</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center gap-5 my-6">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="w-32 py-1 bg-transparent text-gray-800 border border-gray-800 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="w-32 py-1 bg-yellow-700 text-white rounded"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
