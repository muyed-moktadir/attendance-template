import React from 'react'
import { Link } from 'react-router-dom'

import login from "../../assets/images/login.png"
const LoginPage = () => {
    return (
        <>
            <div className="hero h-auto bg-accent mt-7">
                <div className="hero-content justify-between w-screen flex-col lg:flex-row">
                    <div className=' h-screen shrink-0'>
                        <img src={login} class="h-screen" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary capitalize">Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage