import React, { useState } from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginPage2 = ({ data, setData, propsData }) => {
    const { setFName, setLName } = propsData
    const [loginForm, setLoginForm] = useState(true)

    return (
        <>
            {loginForm ?
                <div className="card flex-shrink-0 justify-center md:h-[80vh] rounded-none  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body justify-center">
                        <div className="form-control ">
                            <h1 className='text-center font-bold text-2xl'>SignUp Form</h1>
                            <input onBlur={(e) => setFName(e.target.value)} type="text" placeholder="Write Your First Name" className="input  rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none mt-20 mb-10" />
                        </div>
                        <div className="form-control mb-14">
                            <input onBlur={(e) => setLName(e.target.value)} type="text" placeholder="Write Your Last Name" className="input  rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none" />
                        </div>

                        <div className="form-control">
                            <div className='flex justify-center '>
                                <button onClick={() => setData(!data)} className=" btn btn-primary text-white rounded-2xl hover:bg-white hover:border-[#3B8BEA] hover:text-[#3B8BEA] capitalize text-lg drop-shadow-lg">Next Step <HiOutlineArrowRight className='ml-2 mt-1' /></button>

                            </div>
                        </div>
                        <div className='flex justify-end items-center mt-16'>
                            <label className="label ">
                                <span className='text-xs text-[#7E7E7E] mr-1'>Already Have An Account?</span>

                            </label>
                            <Link href="#" className="label-text-alt link link-hover underline text-[#1678CB]" onClick={() => setLoginForm(!loginForm)}>LOGIN HERE!</Link>
                        </div>
                    </div>
                </div> :
                <LoginForm loginForm={loginForm} setLoginForm={setLoginForm} propsData={propsData} data={data} setData={setData}></LoginForm>
            }
        </>

    )
}

export default LoginPage2