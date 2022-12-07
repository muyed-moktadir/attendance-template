import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from "../../assets/images/login.png"
import { useForm } from "react-hook-form";


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <div className="hero h-auto bg-accent mt-10">
                <div className="hero-content justify-between w-screen flex-col lg:flex-row">
                    <div className='relative'>
                        <h1 className='absolute top-20 left-5'>muyed</h1>
                        <img src={login} class="md:h-screen" alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:h-[85vh] rounded-none  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body justify-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control ">
                                    <h1 className='text-center font-bold text-2xl'>
                                        Login Form
                                    </h1>
                                    <input
                                        type="email"
                                        placeholder="Write Your Email"
                                        className="input  rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none  md:mt-20"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "email is required*"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'provide a valid email'
                                            }
                                        })}
                                    />
                                    <label className="label px-4">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    </label>
                                </div>
                                <div className="form-control mb-12">
                                    <input
                                        type="password"
                                        placeholder="Write Your password Here"
                                        className="input  rounded-none border-b-2 border-slate-300 appearance-none bg-transparent border-t-0 border-l-0 border-r-0 leading-tight focus:outline-none"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "password is required*"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 character or longer'
                                            }
                                        })}
                                    />
                                    <label className="label px-4">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <div className='flex justify-center'>
                                        <input className="btn btn-primary capitalize text-white rounded-2xl hover:bg-white hover:border-[#3B8BEA] hover:text-[#3B8BEA] text-lg px-5" type="submit" value="Log In"/>

                                        {/* <ToastContainer /> */}
                                    </div>
                                </div>


                            </form>




                            <div className='flex justify-end items-center md:mt-16'>
                                <label className="label ">
                                    <span
                                        className='text-xs text-[#7E7E7E] mr-1'>
                                        Dont Have An Account?
                                    </span>

                                </label>
                                <Link
                                    to="/signUp"
                                    href="#"
                                    className="label-text-alt link link-hover underline text-[#1678CB]" >
                                    SIGNUP HERE!
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <ToastContainer className="absolute md:mt-11" /> */}
            </div>





        </>
    )
}

export default LoginForm