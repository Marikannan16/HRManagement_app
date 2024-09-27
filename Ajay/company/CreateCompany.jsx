import React, { useState } from 'react'
import TextInput from '../segments/TextInput'
import SelectInput from '../segments/SelectInput';
import TextareaInput from '../segments/TextareaInput';
import Button from '../segments/Button';

const CreateCompany = () => {
    const [company, setcompany] = useState({
        companyName: '', branch: '', addressLine1: '', addressLine2: '', contactPerson: '',
        stakeholderName: '', username: '', pincode: '', contactNumber: '', stakeholderDetail: '',
        category: '', state: '', priority: '', assignedStaff: '', subCategory: '', district: '',
        establishmentType: '', notificationAlert: '', password: '', image: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setcompany({ ...company, [name]: value, })
    }

    const handleFileChange = (e) => {
        setcompany({ ...company, image: e.target.files[0], })
    }

    const handleCancel = () => {
        setcompany({
            companyName: '', branch: '', addressLine1: '', addressLine2: '', contactPerson: '',
            stakeholderName: '', username: '', pincode: '', contactNumber: '', stakeholderDetail: '',
            category: '', state: '', priority: '', assignedStaff: '', subCategory: '', district: '',
            establishmentType: '', notificationAlert: '', password: '', image: '',
        })
    }

    return (
        <div className='bg-yellow-300 h-full p-5'>
            <h2 className='text-xl'>Hello Everyone!</h2>
            <div>
                <form>
                    <div>
                        <div>
                            <TextInput label='Company Name' name='companyName' value={company.companyName} placeholder='Enter Company Name' onChange={handleInputChange} />
                            <SelectInput label="Category" name="category" value={company.category} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Category" },
                                    { value: "tech", label: "Technology" },
                                    { value: "finance", label: "Finance" },
                                    { value: "manufacturing", label: "Manufacturing" },
                                ]}
                            />
                            <SelectInput label="State" name="state" value={company.state} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select State" },
                                    { value: "CA", label: "California" },
                                    { value: "TX", label: "Texas" },
                                    { value: "NY", label: "New York" },
                                ]}
                            />
                            <TextInput label='Branch' name='branch' value={company.branch} placeholder='Enter The Address' onChange={handleInputChange} />
                            <TextInput label='Address Line 2' name='addressLine2' value={company.addressLine2} placeholder='Enter Address Line 2' onChange={handleInputChange} />
                            <TextInput label='Conatct Person' name='contactPerson' value={company.contactPerson} placeholder='Enter The Contact Person' onChange={handleInputChange} />
                            <SelectInput label="Prioirty" name="priority" value={company.priority} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Priority" },
                                    { value: "low", label: "Low" },
                                    { value: "medium", label: "Medium" },
                                    { value: "high", label: "High" },
                                ]}
                            />
                            <SelectInput label="Assigned Staff" name="assignedStaff" value={company.assignedStaff} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Assign Staff" },
                                    { value: "sub1", label: "Subcategory 1" },
                                    { value: "sub2", label: "Subcategory 2" },
                                ]}
                            />
                            <TextInput label='Stakehholder Name' name='stakeholderName' value={company.stakeholderName} placeholder='Enter The Stakeholder Name' onChange={handleInputChange} />
                            <TextInput label='User Name' name='username' value={company.username} placeholder='Enter The User Name' onChange={handleInputChange} />
                        </div>
                    </div>

                    <SelectInput
                        label="Category"
                        name="category"
                        // value={company.category}
                        // onChange={handleChange}
                        options={[
                            { value: "tech", label: "Technology" },
                            { value: "finance", label: "Finance" },
                            { value: "manufacturing", label: "Manufacturing" },
                        ]}
                    />
                    <TextareaInput label='Address Line 1' name='addressLine1' />
                    <Button label='Save' className='border border-red-500' />
                </form>
            </div>
        </div>
    )
}

export default CreateCompany