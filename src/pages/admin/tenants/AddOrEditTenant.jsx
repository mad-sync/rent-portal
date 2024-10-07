import React, { useState } from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import PrimaryButton from '../../../components/PrimaryButton'
import { useNavigate, useParams } from 'react-router-dom'

const AddOrEditTenant = () => {

    let{id} = useParams()

    const [params , setParams] = useState({
        name : '',
        phone: '',
        email: '',
        previous_address: '',
        adhaar: '',
        pan:'',
    })

    const handleChange = (e) => {
        let { name , value } = e.target;
        setParams({
            ...params,
            [name]: value
        })
    }

    const handleSubmit = () => {
        //validate and call api here
    }

    const navigate = useNavigate();

  return (
    <div>
        <Breadcrumb links={
            [
                {
                    name : "Tenants",
                    link : '#',
                },
                {
                    name : id ? 'Edit Tenant' : 'Add Tenant',
                    link : '#',
                }
            ]
        }/>

        <div className='flex flex-col w-full lg:p-5 p-4'>
            <div className='grid lg:grid-cols-2 lg:gap-5 gap-4 w-full lg:p-5 p-5 bg-white'>
                <Input name="name" value={params.name} label="Name*" handleChange={handleChange} />
                <Input name="phone" value={params.phone} label="Phone*" handleChange={handleChange} />
                <Input name="email" value={params.email} label="Email*" handleChange={handleChange} />
                <Input name="adhaar" value={params.adhaar} label="Adhaar*" handleChange={handleChange} />
                <Input name="pan" value={params.pan} label="PAN*" handleChange={handleChange} />
                <TextArea rows={4} name={'previous_address'} value={params.previous_address} label={'Previous Address*'} handleChange={handleChange} />
            </div>

            <div className='flex items-center justify-end p-4 gap-4 bg-blue-100'>
                <PrimaryButton onClick={() => navigate('/admin/tenants')} variant={'outlined'} label={'Cancel'}/>
                <PrimaryButton onClick={handleSubmit} label={id ? 'Update' : 'Submit'} />
            </div>

        </div>

    </div>
    
  )
}

export default AddOrEditTenant