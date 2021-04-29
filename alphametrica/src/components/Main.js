import React from 'react'
import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
            <main>
                <div className='triangle'>
                    
                </div>
                <div className="logo">
                    <div>
                        <div className="element-1" />
                    </div>
                    <div>
                        <div className="element-2" />
                    </div>
                    <div>
                        <div className="element-3" />  {/*hanlde later*/}
                    </div>
                    <div>
                        <div className="element-4" />
                    </div>
                </div>
                <div className='content'>
                    <h2>Stay on the top <b>of your finance</b></h2>
                    <p>Lorem ipsum dolor sit amet, <b>consetetur sadipscing elitr, sed diam</b></p>
                </div>
            </main>

            <div className="btn-container">
                <Link to="/login">
                    <button className='btn-upper'>가입하기</button>
                </Link>
                <Link to="/signup">
                    <a className='btn-lower'>로그인</a>
                </Link>
            </div>
        </>
    )
}

export default Main
