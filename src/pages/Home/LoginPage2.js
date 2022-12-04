import React from 'react'

const LoginPage1 = ({ data, setData }) => {
    return (
        <>

            <div className="card flex-shrink-0 md:h-[60vh] w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <h1 className='text-center font-bold text-2xl'>SignUp Form</h1>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input  rounded-none border-b-4 border-indigo-500 " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">SignUp here</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={() => setData(!data)} className="btn btn-primary capitalize">Next Step</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginPage1