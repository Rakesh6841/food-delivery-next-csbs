import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const RestaurantSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const router = useRouter();

    const handleSignUp = async () => {
        console.log({
            email,
            password,
            confirmPassword,
            name,
            city,
            address,
            contact
        });

        let response = await fetch('http://localhost:3000/api/restaurant', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                name,
                city,
                address,
            })
        })
        response = await response.json();
        console.log(response);
        if (response.success) {
            alert("Restaurant created successfully");
            console.log(response);
            const { result } = response;
            delete result.password;
            localStorage.setItem('restaurantUser', JSON.stringify(result));
            router.push('/restaurant/dashboard');
        }
    }

    return (
        <div>
            <h3>SignUp Component</h3>
            <div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter email id' className='input-field'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                    <input type="password" placeholder='Enter password' className='input-field'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                    <input type="password" placeholder='Confirm password' className='input-field'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter restaurant name' className='input-field'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter city' className='input-field'
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter full address' className='input-field'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter Contact no.' className='input-field'
                        value={contact}
                        onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                    <button className='button' onClick={handleSignUp}>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default RestaurantSignUp
