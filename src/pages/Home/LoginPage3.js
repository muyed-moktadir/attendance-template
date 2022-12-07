import React, { useState } from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import LoginPage4 from './LoginPage4'
const LoginPage3 = ({ data, setData, propsData }) => {
    const [condition34, setCondition34] = useState(true)
    const { setPhone, setEmail } = propsData
    return (
        <>

            {condition34 ?
                <div className="card flex-shrink-0 md:h-[80vh] w-full max-w-sm shadow-2xl bg-base-100 rounded-none ">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className='text-center font-bold text-2xl '>SignUp Form</h1>
                            <input
                                onBlur={(e) => setPhone(e.target.value)}
                                type="tel"
                                id="phone"
                                className="input rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none mt-20 mb-10"
                                placeholder="01x_xx_xxx_xxx"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                            />
                        </div>

                        <div className="form-control ">
                            <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Write Your Email Address" className="input  rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none" />
                        </div>
                        <div className="form-control shrink-0  flex justify-center items-start">
                            <div className='w-[200px] block'>
                                <button onClick={() => setCondition34(!condition34)} className="btn btn-primary text-white rounded-2xl hover:bg-white hover:border-[#3B8BEA] hover:text-[#3B8BEA] capitalize text-lg">Next Step <HiOutlineArrowRight className='ml-2 mt-1' /></button>
                            </div>
                            <div className=' w-[100px]'>
                                <Link onClick={() => setData(!data)} className="link link-secondary no-underline">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>

                :
                <LoginPage4 propsData={propsData} condition34={condition34} setCondition34={setCondition34} />
            }
        </>
    )
}

export default LoginPage3