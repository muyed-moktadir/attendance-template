import React, { useState } from 'react'
import login from "../../assets/images/login.png"
import LoginPage2 from './LoginPage2'
import LoginPage3 from './LoginPage3'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const LoginPage1 = () => {
    const [data, setData] = useState(true)
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleFrom = () => {
        if (password.length <= 8) {
            toast('Password must be 8 characters')
            console.log(fName, lName, phone, email, password)
        }

    }
    const propsData = {
        setFName, setLName, setPhone, setEmail, setPassword, handleFrom
    }
    console.log(fName)
    return (
        <>
            <div className="hero h-auto bg-accent mt-10">

                <div className="hero-content justify-between w-screen flex-col lg:flex-row">

                    <div className='relative'>
                        <h1 className='absolute top-20 left-5'>muyed</h1>
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