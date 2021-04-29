import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

function SignUp() {
    return (
        <div className='container'>
            <header className="signup-header">
                <h3>회원가입</h3>
            </header>

            <main className="signup-form">
                <form>
                    <div>
                        <span>이름</span>
                        <div className='field'>
                            <input type='text' placeholder='이채민' />
                        </div>
                        <span>휴대폰 <b>번호</b></span>
                        <div className='field'>
                            <input type='text' placeholder='+82 111 1111111' />
                        </div>
                        <span>생년월일</span>
                        <div className='field'>
                            <input type='text' placeholder=' mm - dd-yyyy' />
                        </div>
                        <span>Email</span>
                        <div className='field'>
                            <input type='text' placeholder='john.doe@alphametics.com' />
                        </div>
                        <span>비밀번호</span>
                        <div className='field'>
                            <input type='text' placeholder=' ' />
                        </div>
                        <span>비밀번호 <b>확인</b></span>
                        <div className='field'>
                            <input type='text' placeholder=' ' />
                        </div>
                    </div>

                    <div className='check-circle'>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <small>최소 <b>8자</b> 이상</small>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <small>최소 <b>하나의</b> 숫자</small>
                            </div>
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <small>최소 <b>하나의</b> 대문자</small>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <small>최소 <b>하나의</b> 특수문자</small>
                            </div>
                        </div>
                    </div>


                    <div className='btn-container'>
                        <div className='check-square'>
                            <FontAwesomeIcon icon={faCheckSquare} className='check-square-mark' />
                            <small>이용약관에 동의합니다</small>
                        </div>
                        <button type='submit' className='btn-upper'>가입하기</button>
                        <Link to='/'>
                            <a className='btn-lower'>이미 계정이 있으신가요?  로그인</a>
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default SignUp
