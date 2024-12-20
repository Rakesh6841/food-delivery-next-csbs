import React from 'react'

const RestaurantSignUp = () => {
    return (
        <div>
            <h3>SignUp Component</h3>
            <div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter email id' className='input-field' />
                </div>
                <div className='input-wrapper'>
                    <input type="password" placeholder='Enter password' className='input-field' />
                </div>
                <div className='input-wrapper'>
                    <input type="password" placeholder='Confirm password' className='input-field' />
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter restaurant name' className='input-field' />
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter city' className='input-field' />
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter full address' className='input-field' />
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter Contact no.' className='input-field' />
                </div>
                <div className='input-wrapper'>
                    <button className='button'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default RestaurantSignUp
