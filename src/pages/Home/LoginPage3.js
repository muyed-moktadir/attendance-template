import React from 'react'
import { Link } from 'react-router-dom'

import login from "../../assets/images/login.png"
const LoginPage3 = ({data,setData}) => {
    return (
        <>

                    <div className="card flex-shrink-0 md:h-[70vh] w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Id</span>
                                </label>
                                <input type="text" placeholder="id" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
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
                                <button onClick={()=>setData(!data)} className="btn btn-primary capitalize">Next Step</button>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default LoginPage3