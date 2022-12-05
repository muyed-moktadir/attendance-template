import React from 'react'
import { Link } from 'react-router-dom'

import login from "../../assets/images/login.png"
import LoginPage4 from './LoginPage4'
const LoginPage3 = ({ data, setData }) => {
    return (
        <>

            <div className="card flex-shrink-0 md:h-[50vh] w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label htmlFor="phone" className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            class="input input-bordered"
                            placeholder="+880 12345678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Write Your Email Address" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={() => setData(!data)} className="btn btn-primary capitalize">Next Step</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage3