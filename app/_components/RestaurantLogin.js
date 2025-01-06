import React, { useState } from 'react'

const RestaurantLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            setError(true);
        } else {
            setError(false);
        }
        console.log(email, password);
    }

    return (
        <>
            <h3>Login Component</h3>
            <div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter email id' className='input-field' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error && !email && <span className='input-error'>Please enter a valid email</span>}
                </div>
                <div className='input-wrapper'>
                    <input type="password" placeholder='Enter password' className='input-field' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && !password && <span className='input-error'>Please enter a valid password</span>}
                </div>
                <div className='input-wrapper'>
                    <button className='button' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantLogin
