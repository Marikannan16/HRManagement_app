import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import SelectInput from '../../Components/SelectInput'
import Button from '../../Components/Button'
import FileInput from '../../Components/FileInput'

const CreateUser = () => {
    const [user, setUser] = useState({
        username: '', email: '', companyAccess: '', designation: '', password: '', modulesAccess: '', userImage: null,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setUser({ ...user, userImage: URL.createObjectURL(file), });
        }
    };

    const handleCancel = () => {
        setUser({
            username: '', email: '', companyAccess: '', designation: '', password: '', modulesAccess: '', userImage: null,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!!');
        console.log(user)
        setUser({
            username: '', email: '', companyAccess: '', designation: '', password: '', modulesAccess: '', userImage: null,
        })
    }

    return (
        <div className='h-full p-5'>
            <h2 className='text-xl font-bold'>Create User</h2>
            <div className='px-5'>
                <form onSubmit={handleSubmit}>
                    <FileInput imageLabel='User Profile Photo' onImageChange={handleFileChange} imageSection={user.userImage} />

                    <div className='grid grid-cols-1 gap-2 mb-6 lg:grid-cols-2 lg:gap-10'>
                        <div>
                            <TextInput label='User Name' name='username' value={user.username} placeholder='Enter The User Name' onChange={handleInputChange} />
                            <TextInput label='Email ID' name='email' value={user.email} placeholder='Enter The Email ID' onChange={handleInputChange} />
                            <SelectInput label="Company Access" name="companyAccess" value={user.companyAccess} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select The Company" },
                                    { value: "Company A", label: "Company A" },
                                    { value: "Company B", label: "Company B" },
                                    { value: "Company C", label: "Company C" },
                                ]}
                            />

                        </div>
                        <div>
                            <SelectInput label="Designation" name="designation" value={user.designation} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select The Designation" },
                                    { value: "Client X", label: "Client X" },
                                    { value: "Client Y", label: "Client Y" },
                                    { value: "Client Z", label: "Client Z" },
                                ]}
                            />
                            <TextInput label='Password' type='password' name='password' value={user.password} placeholder='Enter The Password' onChange={handleInputChange} />
                            <SelectInput label="Module Access" name="modulesAccess" value={user.modulesAccess} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select The Access" },
                                    { value: "Module 1", label: "Module 1" },
                                    { value: "Module 2", label: "Module 2" },
                                    { value: "Module 3", label: "Module 3" },
                                ]}
                            />
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-5'>
                        <Button label='Cancel' onClick={handleCancel} className='bg-white border border-gray-800' />
                        <Button label='Submit' type='submit' className='text-white bg-yellow-500 border border-yellow-500' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser