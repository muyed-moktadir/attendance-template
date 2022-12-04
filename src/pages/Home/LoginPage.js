import React from 'react'
import { Link } from 'react-router-dom'

import login from "../../assets/images/login.png"
const LoginPage = () => {
    return (
        <>
            <div className="hero h-screen bg-accent mt-16">
                <div className="hero-content flex-col lg:flex-row gap-64 ">
                    <div className='h-screen mb-0'>
                        <img src={login} class="h-full shrink-0 mb-0" alt="" />
                    </div>
                    <div className="card flex-shrink-0 h-[60vh] w-full max-w-sm shadow-2xl bg-slate-100 mb-0">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><span className='capitalize'>Next Step</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage