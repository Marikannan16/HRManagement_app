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
        <div className='h-screen p-5'>
            <h2 className='text-xl font-bold'>Create User</h2>
            <div className='px-5'>
                <form onSubmit={handleSubmit} className='mt-4'>
                    <div className='grid grid-cols-1 gap-2 mb-96 lg:grid-cols-2 lg:gap-10'>
                        <TextInput label='Category' name='category' value={category} placeholder='Enter The Category' onChange={handleInputChange} />
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

export default CreateCategory