import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import SelectInput from '../../Components/SelectInput'
import Button from '../../Components/Button'
import { GoUpload } from 'react-icons/go'
import pdf from '../../Images/pdf.webp'

const CreateCompliance = () => {
    const [compliance, setCompliance] = useState({
        activity: '', typeOfAct: '', applicationLaborAct: '', dueDate: '', section: '',
        remarks: '', nameOfForm: '', state: '', applicability: '', frequencyOfCompliance: '',
        priorityType: '', documentPdf: null
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCompliance({ ...compliance, [name]: value, })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setCompliance({ ...compliance, documentPdf: URL.createObjectURL(file), });
        }
    };

    const handleCancel = () => {
        setCompliance({
            activity: '', typeOfAct: '', applicationLaborAct: '', dueDate: '', section: '',
            remarks: '', nameOfForm: '', state: '', applicability: '', frequencyOfCompliance: '',
            priorityType: '', documentPdf: null
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!!');
        console.log(compliance)
        setCompliance({
            activity: '', typeOfAct: '', applicationLaborAct: '', dueDate: '', section: '',
            remarks: '', nameOfForm: '', state: '', applicability: '', frequencyOfCompliance: '',
            priorityType: '', documentPdf: null
        })
    }

    return (
        <div className='h-full p-5'>
            <h2 className='text-xl font-bold'>Create compliance</h2>
            <div className='px-5'>
                <form onSubmit={handleSubmit} className='mt-4'>
                    {/* <FileInput imageLabel='compliance Profile Photo' onImageChange={handleFileChange} imageSection={compliance.complianceImage} /> */}

                    <div className='grid grid-cols-1 gap-2 mb-6 lg:grid-cols-2 lg:gap-10'>
                        <div>
                            <TextInput label='Activity' name='activity' value={compliance.activity} placeholder='Enter The Activity' onChange={handleInputChange} />
                            <TextInput label='Type of Act' name='typeOfAct' value={compliance.typeOfAct} placeholder='Enter The Act' onChange={handleInputChange} />
                            <TextInput label='Applicable Labor Act' name='applicationLaborAct' value={compliance.applicationLaborAct} placeholder='Enter The Applicable Law' onChange={handleInputChange} />
                            <TextInput label='Due Date' name='dueDate' value={compliance.dueDate} placeholder='Enter The Due Date' onChange={handleInputChange} />
                            <TextInput label='Section' name='section' value={compliance.section} placeholder='Enter The Section' onChange={handleInputChange} />
                            <TextInput label='Remarks' name='remarks' value={compliance.remarks} placeholder='Enter The Remarks' onChange={handleInputChange} />

                        </div>
                        <div>
                            <TextInput label='Name of Form' name='nameOfForm' value={compliance.nameOfForm} placeholder='Enter The Name of Form' onChange={handleInputChange} />
                            <SelectInput label="State" name="state" value={compliance.state} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select The State" },
                                    { value: "tamilnadu", label: "Tamilnadu" },
                                    { value: "kerala", label: "Kerala" },
                                    { value: "karnataka", label: "Karnataka" },
                                ]}
                            />
                            <TextInput label='Applicability' name='applicability' value={compliance.applicability} placeholder='Enter The Applicability' onChange={handleInputChange} />
                            <SelectInput label="Frequency of Compliance" name="frequencyOfCompliance" value={compliance.frequencyOfCompliance} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Frequency Of Compliance" },
                                    { value: "frequency 1", label: "Frequency 1" },
                                    { value: "frequency 2", label: "Frequency 2" },
                                    { value: "frequency 3", label: "Frequency 3" },
                                ]}
                            />
                            <SelectInput label="Priority Type" name="priorityType" value={compliance.priorityType} onChange={handleInputChange}
                                options={[
                                    { value: "", label: "Select Priority Type" },
                                    { value: "high", label: "High" },
                                    { value: "medium", label: "Medium" },
                                    { value: "low", label: "Low" },
                                ]}
                            />
                            <div className="mb-2">
                                <label className="block mb-2 font-semibold">Upload Document</label>
                                <label htmlFor="documentPdf" className="bg-yellow-500 text-white w-28 relative px-4 py-2 flex gap-2 justify-center items-center rounded cursor-pointer">
                                    {compliance.documentPdf ? (<img src={pdf} alt="document" className="w-full h-full object-cover" />)
                                        : (<span><GoUpload size={22} /></span>)}
                                    <span><p>upload</p></span>
                                    <input id="documentPdf" type="file" accept="pdf/*" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
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

export default CreateCompliance