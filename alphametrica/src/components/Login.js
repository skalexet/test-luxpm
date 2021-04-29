import { React, useState } from 'react';
import { Link, Router, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

function Login() {
    const history = useHistory();
    const checkTheData = (e) => {
        e.preventDefault();
        console.log(200);              // hardcoded checking
        if (e.target[0].value !== 'test@luxpmsoft.com' || e.target[1].value !== 'test1234') {
            return;
        } else {
            history.push('/account')
        }
    }
    return (
        <>
            <div className='login-header'>
                <h3>로그인</h3>
            </div>

            <main className='login-form'>
                <form id='signInForm' onSubmit={checkTheData}>
                    <span>Email</span>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        <input type="email" name='email' placeholder='sabahat@gmail.com' />
                    </div>
                    <span>비밀번호</span>
                    <div>
                        <FontAwesomeIcon icon={faLock} className='icon' />
                        <input type="password" placeholder='**********' />
                    </div>
                </form>
                <a>비밀번호 찾기</a>
            </main>

            <footer className="btn-container">
                <button form='signInForm' type='submit' className='btn-upper'>가입하기</button>
                <Link to="/">
                    <a className='btn-lower'>계정이 없으신가요? 가입하기</a>
                </Link>
            </footer>
        </>
    )
}

export default Login
