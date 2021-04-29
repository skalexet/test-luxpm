import React from 'react'
import { useHistory } from 'react-router-dom';

function Account() {
    const history = useHistory();
    function goBack() {
        history.push('/');
    }

    return (
        <>
            <header><h1>Hello anybody</h1></header>
            <section>
                <button className='btn-upper' onClick={goBack}>Home</button>
            </section>
        </>
    )
}

export default Account
