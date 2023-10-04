import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom'
// import Styled from 'styled-components'


export default function Register(props) {
    let mgClass = ["text-center"]
    if (props.type) {
        mgClass.push("text-success")
    } else {

        mgClass.push("text-danger")
    }

    return (
        <div className='container'>
            <div className='card bg-light cardItem'>
                <article className='card-body mx-auto ' style={{ width: "500px" }}>
                    <h4 className='card-title mt-3 text-center '>Create Account</h4>
                    <p className='text-center'>Get started with your free account</p>
                    <p className={mgClass.join(" ")}>{props.message}</p>
                    <p>
                        <Link href="" onClick={props.google} className='btn btn-block btn-google'>
                            <i className='fab fa-twitter'></i> Sign up with Google
                        </Link>
                        <Link href="" onClick={props.facebook} className='btn btn-block btn-facebook'>
                            <i className='fab fa-facebook-f'></i> Sign up with Facebook
                        </Link>
                    </p>
                    <p className='divider-text'>
                        <span className='big-light'><b>OR</b></span>
                    </p>
                    <form onSubmit={props.register}>
                        <div className='form-group input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text' >
                                    <i className='fas fa-envelope'></i>
                                </span>
                            </div>
                            <input type='email' name='email' className='form-control' placeholder='Email' />
                        </div>
                        <div className='form-group input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text' >
                                    <i className='fas fa-lock'></i>
                                </span>
                            </div>
                            <input type='password' name='password' className='form-control' placeholder='create password' />
                        </div>
                        <div className='form-group input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text' >
                                    <i className='fas fa-lock'></i>
                                </span>
                            </div>
                            <input type='password' name='confirmPassword' className='form-control' placeholder='Repeat password' />
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-primary btn-block'>Create Account</button>
                        </div>
                        <p className='text-center'>Have an account?<Link to='' onClick={props.switch}>Log In</Link></p>
                    </form>
                </article>
            </div>
        </div>
    );
}

