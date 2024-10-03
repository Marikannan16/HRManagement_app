import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import Button from '../../Components/Button'

const CreateCategory = () => {
    const [category, setCategory] = useState('')

    const handleInputChange = (e) => {
        setCategory(e.target.value)
    }

    const handleCancel = () => {
        setCategory('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!!');
        console.log(category)
        setCategory('')
    }

    return (
        <div className='h-full p-5 shadow-lg'>
            <div className="flex items-center justify-between">
                <h2 className='text-xl font-bold'>Create Category</h2>
                <button className="w-36 py-1.5 bg-yellow-600 text-white rounded cursor-pointer flex items-center justify-center gap-2">
                    Category List
                </button>
            </div>
            <form onSubmit={handleSubmit} className='py-10 flex flex-col gap-80'>
                <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-10'>
                    <TextInput label='Category' name='category' value={category} placeholder='Enter the category' onChange={handleInputChange} />
                </div>

                <div className='flex justify-center items-center gap-5'>
                    <Button label='Cancel' onClick={handleCancel} className='bg-white border border-gray-800' />
                    <Button label='Save' type='submit' className='text-white bg-yellow-500 border border-yellow-500' />
                </div>
            </form>
        </div>
    )
}

export default CreateCategory