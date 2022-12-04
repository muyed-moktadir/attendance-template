import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import login from "../../assets/images/login.png"
import LoginPage2 from './LoginPage2'
import LoginPage3 from './LoginPage3'
const LoginPage = () => {
    const [data, setData] = useState(true)
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
                        
                            <LoginPage2 data={data} setData={setData} /> : <LoginPage3 data={data} setData={setData}></LoginPage3>
                    }

                </div>
            </div>
        </>
    )
}

export default LoginPage