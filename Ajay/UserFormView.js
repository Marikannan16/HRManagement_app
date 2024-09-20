import React from 'react';
import { GoUpload } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, resetUserData } from '../Slices/userSclice';
import { useNavigate } from 'react-router-dom';

const UserFormView = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted data:', user);
        alert('Form Submitted');
        navigate('/first-form')
    };

    const handleCancel = (e) => {
        e.preventDefault();
        dispatch(resetUserData())
        navigate('/first-form')
    };

    return (
        <div className="w-screen h-screen px-10 py-5">
            <h2 className="text-xl font-semibold text-gray-800 ms-2 text-start">View User</h2>

            <div className="flex flex-col justify-center items-center pb-8">
                <label htmlFor="profilePhoto" className="relative cursor-pointer">
                    <div className="w-40 h-40 bg-gray-100 shadow-md rounded-full overflow-hidden flex items-center justify-center">
                        <span className="text-gray-500 text-6xl ">
                            <img src={user.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                        </span>
                    </div>
                    <input
                        type="file"
                        readOnly
                        className="hidden"
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
                                value={user.username}
                                className="w-full p-2 border rounded"
                                readOnly
                            />
                        </div>


                        <div className="mb-4 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Email ID</label>
                            <input
                                type="email"
                                value={user.email}
                                className="w-full p-2 border rounded"
                                readOnly
                            />
                        </div>


                        <div className="mb-4 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Email ID</label>
                            <input
                                type="text"
                                value={user.access}
                                className="w-full p-2 border rounded"
                                readOnly
                            />
                        </div>
                    </div>


                    <div>
                        <div className="mb-4 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Email ID</label>
                            <input
                                type="text"
                                value={user.designation}
                                className="w-full p-2 border rounded"
                                readOnly
                            />
                        </div>


                        <div className="mb-4 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                value={user.password}
                                className="w-full p-2 border rounded"
                                readOnly
                            />
                        </div>


                        <div className="mb-4 flex flex-col gap-2">
                            <label className="block font-semibold text-gray-700">Email ID</label>
                            <input
                                type="text"
                                value={user.modules}
                                className="w-full p-2 border rounded"
                                readOnly
                            />
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

export default UserFormView;
