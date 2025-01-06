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
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setPasswordError(true);
            return false;
        } else {
            setPasswordError(false);
        }

        if (!email || !password || !confirmPassword || !name || !city || !address || !contact) {
            setError(true);
            return false;
        } else {
            setError(false);
        }

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
                    {
                        error && !email && <span className='input-error'>Please enter a valid email</span>
                    }
                </div>
                <div className='input-wrapper'>
                    <input type="password" placeholder='Enter password' className='input-field'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {
                        passwordError && <span className='input-error'>Password and Confirm Password does not match</span>
                    }
                    {
                        error && !password && <span className='input-error'>Please enter a valid password</span>
                    }
                </div>
                <div className='input-wrapper'>
                    <input type="password" placeholder='Confirm password' className='input-field'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    {
                        passwordError && <span className='input-error'>Password and Confirm Password does not match</span>
                    }
                    {
                        error && !confirmPassword && <span className='input-error'>Please enter a valid confirm password</span>
                    }
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter restaurant name' className='input-field'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    {
                        error && !name && <span className='input-error'>Please enter a valid restaurant name</span>
                    }
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter city' className='input-field'
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                    {
                        error && !city && <span className='input-error'>Please enter a valid city</span>
                    }
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter full address' className='input-field'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                    {
                        error && !address && <span className='input-error'>Please enter a valid address</span>
                    }
                </div>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Enter Contact no.' className='input-field'
                        value={contact}
                        onChange={(e) => setContact(e.target.value)} />
                    {
                        error && !contact && <span className='input-error'>Please enter a valid contact no.</span>
                    }
                </div>
                <div className='input-wrapper'>
                    <button className='button' onClick={handleSignUp}>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default RestaurantSignUp
