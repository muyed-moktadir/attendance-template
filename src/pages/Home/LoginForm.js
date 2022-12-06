import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = ({propsData }) => {
    const { SetEmail, setPassword, handleFrom } = propsData
    return (
        <>

            <div className="card flex-shrink-0 md:h-[85vh] rounded-none  w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body justify-center">
                    <div className="form-control ">
                        <h1 className='text-center font-bold text-2xl'>Login Form</h1>
                        <input onBlur={(e) => SetEmail(e.target.value)} type="email" placeholder="Write Your Email" className="input  rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none mt-20 mb-12" />
                    </div>
                    <div className="form-control mb-12">
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Write Your password Here" className="input  rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none" />
                    </div>

                    <div className="form-control mt-6">
                        <div className='flex justify-center'>
                            <button onClick={() => handleFrom()} className="btn btn-primary capitalize text-white rounded-2xl hover:bg-white hover:border-[#3B8BEA] hover:text-[#3B8BEA] text-lg">Submit</button>
                        </div>
                    </div>
                    <div className='flex justify-end items-center mt-16'>
                        <label className="label ">
                            <span className='text-xs text-[#7E7E7E] mr-1'>Dont Have An Account?</span>

                        </label>
                        <Link href="#" className="label-text-alt link link-hover underline text-[#1678CB]" >SIGNUP HERE!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm