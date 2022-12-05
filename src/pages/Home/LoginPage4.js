import React from 'react'

const LoginPage4 = ({ data,setData }) => {
    return (
        <>

            <div className="card flex-shrink-0 md:h-[40vh] w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary capitalize">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage4