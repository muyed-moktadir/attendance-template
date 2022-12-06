import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage4 = ({ condition34, setCondition34, propsData }) => {
    const { setPassword, handleFrom } = propsData
    return (
        <>

            <div className="card flex-shrink-0 md:h-[85vh] w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                <div className="card-body justify-center">

                    <div className="form-control">
                    <h1 className='text-center font-bold text-2xl '>SignUp Form</h1>
                        <input onBlur={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none mt-20 mb-10" />
                    </div>
                    <div className="form-control mt-6">
                        <div className='flex justify-center'>
                            <button onClick={() => handleFrom()} className="btn btn-primary capitalize text-white rounded-2xl hover:bg-white hover:border-[#3B8BEA] hover:text-[#3B8BEA] text-lg px-6">SignUp</button>
                        </div>
                    </div>
                    <div className="form-control mt-16">
                        <div className='flex justify-center'>
                            <Link  onClick={() => setCondition34(!condition34)} className="link link-secondary no-underline">Previous Step</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage4