import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import SelectInput from '../../Components/SelectInput'
import TextareaInput from '../../Components/TextareaInput'
import Button from '../../Components/Button'
import FileInput from '../../Components/FileInput'

const CreateBranch = () => {
    const [branch, setBranch] = useState({
        branch: '', addressLine1: '', addressLine2: '', contactPerson: '', stakeholderName: '',
        username: '', pincode: '', contactNumber: '', stakeholderDetail: '', category: '',
        state: '', priority: '', assignedStaff: '', subCategory: '', district: '',
        establishmentType: '', notificationAlert: '', password: '', companyImage: null,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBranch({ ...branch, [name]: value, })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setBranch({ ...branch, companyImage: URL.createObjectURL(file), });
        }
    };

    const handleCancel = () => {
        setBranch({
            branch: '', addressLine1: '', addressLine2: '', contactPerson: '', stakeholderName: '',
            username: '', pincode: '', contactNumber: '', stakeholderDetail: '', category: '',
            state: '', priority: '', assignedStaff: '', subCategory: '', district: '',
            establishmentType: '', notificationAlert: '', password: '', companyImage: null,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!!');
        console.log(branch)
        setBranch({
            branch: '', addressLine1: '', addressLine2: '', contactPerson: '', stakeholderName: '',
            username: '', pincode: '', contactNumber: '', stakeholderDetail: '', category: '',
            state: '', priority: '', assignedStaff: '', subCategory: '', district: '',
            establishmentType: '', notificationAlert: '', password: '', companyImage: null,
        })
    }

    return (
        <div className='h-full p-5'>
            <h2 className='text-xl font-bold'>Add Branch</h2>
            <div className='px-5'>
                <form onSubmit={handleSubmit}>
                    <FileInput imageLabel='--- Corporation' onImageChange={handleFileChange} imageSection={branch.companyImage} />

                    <div className='grid grid-cols-1 gap-2 mb-6 lg:grid-cols-2 lg:gap-10'>
                        <div>
                            <SelectInput label="Category" name="category" value={branch.category} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Category" },
                                    { value: "technology", label: "Technology" },
                                    { value: "finance", label: "Finance" },
                                    { value: "manufacturing", label: "Manufacturing" },
                                ]}
                            />
                            <SelectInput label="State" name="state" value={branch.state} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select State" },
                                    { value: "tamilnadu", label: "Tamilnadu" },
                                    { value: "kerala", label: "Kerala" },
                                    { value: "delhi", label: "Delhi" },
                                ]}
                            />
                            <TextInput label='Branch' name='branch' value={branch.branch} placeholder='Enter The Address' onChange={handleInputChange} />
                            <TextareaInput label='Address Line 2' name='addressLine2' value={branch.addressLine2} placeholder='Enter Address Line 2' onChange={handleInputChange} />
                            <TextInput label='Conatct Person' name='contactPerson' value={branch.contactPerson} placeholder='Enter The Contact Person' onChange={handleInputChange} />
                            <SelectInput label="Prioirty" name="priority" value={branch.priority} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Priority" },
                                    { value: "low", label: "Low" },
                                    { value: "medium", label: "Medium" },
                                    { value: "high", label: "High" },
                                ]}
                            />
                            <SelectInput label="Assigned Staff" name="assignedStaff" value={branch.assignedStaff} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Assign Staff" },
                                    { value: "manager", label: "Manager" },
                                    { value: "supervisor", label: "Supervisor" },
                                ]}
                            />
                            <TextInput label='Stakehholder Name' name='stakeholderName' value={branch.stakeholderName} placeholder='Enter The Stakeholder Name' onChange={handleInputChange} />
                            <TextInput label='User Name' name='username' value={branch.username} placeholder='Enter The User Name' onChange={handleInputChange} />
                        </div>
                        <div>
                            <SelectInput label="Sub-Category" name="subCategory" value={branch.subCategory} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Assign Staff" },
                                    { value: "subcategory 1", label: "Subcategory 1" },
                                    { value: "subcategory 2", label: "Subcategory 2" },
                                ]}
                            />
                            <SelectInput label="District" name="district" value={branch.district} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select District" },
                                    { value: "chennai", label: "Chennai" },
                                    { value: "madurai", label: "Madurai" },
                                ]}
                            />
                            <TextareaInput label='Address Line 1' name='addressLine1' value={branch.addressLine1} placeholder='Enter Address Line 1' onChange={handleInputChange} />
                            <TextInput label='Pincode' name='pincode' value={branch.pincode} placeholder='Enter The Pincode' onChange={handleInputChange} />
                            <TextInput label='Contact Number or Email ID' name='contactNumber' value={branch.contactNumber} placeholder='Enter The Contact Number or Email ID' onChange={handleInputChange} />
                            <SelectInput label="Establishment Type" name="establishmentType" value={branch.establishmentType} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Establishment Type" },
                                    { value: "establishment A", label: "Establishment A" },
                                    { value: "establishment B", label: "Establishment B" },
                                    { value: "establishment C", label: "Establishment C" },
                                ]}
                            />
                            <SelectInput label="Notification Alert" name="notificationAlert" value={branch.notificationAlert} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Notification Alert" },
                                    { value: "email", label: "Email" },
                                    { value: "sms", label: "SMS" },
                                    { value: "none", label: "None" },
                                ]}
                            />
                            <TextInput label='Stakeholder Detail with Email ID' name='stakeholderDetail' value={branch.stakeholderDetail} placeholder='Enter The Email ID' onChange={handleInputChange} />
                            <TextInput label='Password' type='password' name='password' value={branch.password} placeholder='Enter The Password' onChange={handleInputChange} />
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

export default CreateBranch