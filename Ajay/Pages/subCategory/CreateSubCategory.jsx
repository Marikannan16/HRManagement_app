import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import Button from '../../Components/Button'
import SelectInput from '../../Components/SelectInput'

const CreateSubCategory = () => {
    const [categories, setCategories] = useState({
        category: '',
        subCategory: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCategories({ ...categories, [name]: value, })
    }

    const handleCancel = () => {
        setCategories({
            category: '',
            subCategory: '',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!!');
        console.log(categories)
        setCategories({
            category: '',
            subCategory: '',
        })
    }

    return (
        <div className='h-full p-5'>
            <h2 className='text-xl font-bold'>Create User</h2>
            <div className='px-5'>
                <form onSubmit={handleSubmit} className='mt-4'>
                    <div className='grid grid-cols-1 gap-2 mb-96 lg:grid-cols-2 lg:gap-10'>
                        <SelectInput label="Category" name="category" value={categories.category} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select The Category" },
                                { value: "Category X", label: "Category X" },
                                { value: "Category Y", label: "Category Y" },
                                { value: "Category Z", label: "Category Z" },
                            ]}
                        />
                        <TextInput label='Sub Category' name='subCategory' value={categories.subCategory} placeholder='Enter The Sub Category' onChange={handleInputChange} />
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

export default CreateSubCategory