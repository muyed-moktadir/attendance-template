import React, { useState } from 'react'
import login from "../../assets/images/login.png"
import LoginPage2 from './LoginPage2'
import LoginPage3 from './LoginPage3'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const LoginPage1 = () => {
    const [data, setData] = useState(true)
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleFrom = () => {
        if (password.length <= 8) {
            toast('Password must be 8 characters')
            console.log(fName, lName, phone, email, password)
            
        }
        else{
            navigate("/attendance")
        }

    }
    const propsData = {
        fName, lName, phone, email, password,setFName, setLName, setPhone, setEmail, setPassword, handleFrom
    }
    console.log(fName)
    return (
        <>
            <div className="hero h-auto bg-accent mt-20">

                <div className="hero-content justify-between w-screen flex-col lg:flex-row">

                    <div className='relative '>
                        <div className='absolute top-13 left-5'>
                        <h1 className='text-4xl font-bold mb-0'>Ultimate</h1>
                        <span className='text-sm mt-0'>Human Resource Management</span>
                        </div>
                        
                        <img src={login} class="md:h-screen" alt="" />
                    </div>
                    {
                        data ?

                            <LoginPage2 propsData={propsData} data={data} setData={setData} /> :
                            <LoginPage3 propsData={propsData} data={data} setData={setData}></LoginPage3>
                    }

                </div>
                {/* <ToastContainer className="absolute md:mt-11" /> */}
            </div>
        </>
    )
}

export default LoginPage1