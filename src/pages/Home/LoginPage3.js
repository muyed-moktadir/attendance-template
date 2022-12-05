import React, { useState } from 'react'
import LoginPage4 from './LoginPage4'
const LoginPage3 = ({ data, setData, propsData }) => {
    const [condition34, setCondition34] = useState(true)
    const { setPhone, setEmail } = propsData
    return (
        <>

            {condition34 ?
                <div className="card flex-shrink-0 md:h-[60vh] w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label htmlFor="phone" className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                onBlur={(e) => setPhone(e.target.value)}
                                type="tel"
                                id="phone"
                                class="input input-bordered"
                                placeholder="01x_xx_xxx_xxx"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Write Your Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <div className='flex justify-center'>
                                <button onClick={() => setCondition34(!condition34)} className="btn btn-primary capitalize">Next Step</button>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <div className='flex justify-center'>
                                <button onClick={() => setData(!data)} className="btn btn-primary capitalize">Previous Step</button>
                            </div>
                        </div>
                    </div>
                </div> : <LoginPage4 propsData={propsData} condition34={condition34} setCondition34={setCondition34} />
            }
        </>
    )
}

export default LoginPage3