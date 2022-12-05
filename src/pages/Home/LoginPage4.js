import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage4 = ({ condition34, setCondition34, propsData }) => {
    const { setPassword, handleFrom } = propsData
    return (
        <>

            <div className="card flex-shrink-0 md:h-[50vh] w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onBlur={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <div className='flex justify-center'>
                            <button onClick={() => handleFrom()} className="btn btn-primary capitalize">Submit</button>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <div className='flex justify-center'>
                            <Link  onClick={() => setCondition34(!condition34)} className="link link-secondary">Previous Step</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage4