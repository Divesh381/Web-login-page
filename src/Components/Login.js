import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

export default function Login(props) {
    let mgClass = ["text-center"]
    if (props.type) {
        mgClass.push("text-success")
    } else {

        mgClass.push("text-danger")
    }
    return (
        <div className='container'>
            <div className='card bg-light cardItem'>
                <article className='card-body mx-auto' style={{ width: "500px" }}>
                    <h4 className='card-title mt-3 text-center'>Login</h4>
                    <p className={mgClass.join(" ")}>{props.message}</p>
                    <p>
                        <Link href="" className='btn btn-block btn-twitter'>
                            <i className='fab fa-twitter'></i>Login via Twitter
                        </Link>
                        <Link href="" className='btn btn-block btn-facebook'>
                            <i className='fab fa-facebook-f'></i> Login via Facebook
                        </Link>
                    </p>
                    <p className='divider-text'>
                        <span className='big-light'><b>OR</b></span>
                    </p>
                    <form onSubmit={props.login}>
                        <div className='form-group input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text' >
                                    <i className='fas fa-envelope'></i>
                                </span>
                            </div>
                            <input type='email' name='email' className='form-control' placeholder='Email address' />
                        </div>
                        <div className='form-group input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text' >
                                    <i className='fas fa-lock'></i>
                                </span>
                            </div>
                            <input type='password' name='password' className='form-control' placeholder='password' />
                        </div>

                        <div className='form-group'>
                            <button type='submit' className='btn btn-primary btn-block'>Login</button>
                        </div>
                        <p className='text-center'><Link to='' onClick={props.switch}>Create</Link>an account</p>
                    </form>
                </article>
            </div>
        </div>
    );
}

