import React, {useState} from 'react';
import './SignUpForm.css'
import Error from './Error';

function SignUpForm({setShowLogin, onLogin}) {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        gender: ""
    })
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleChange(e){
        const name = e.target.name;
        let value = e.target.value;

        setUserData({
            ...userData,
            [name]: value,
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        fetch('/signup', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((r) => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((user) => onLogin(user))
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        });
        setUserData({
            username: '',
            password: '',
            password_confirmation: '',
            email: '',
            gender: ''
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={userData.password_confirmation}
                        onChange={handleChange}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="gender"
                        value={userData.gender}
                        onChange={handleChange}
                    />
                    <input type="submit" value={isLoading ? "Signing up..." : "Sign up"} />
            </form>
            {errors.map((error) => {
                return <Error key={error} error={error} />
            })}
            <hr className='hr-login' />
            <p className='sign-up-redirect'>
                Already have an account? &nbsp;
                <button className="sign-up-redirect-btn" onClick={() => setShowLogin(true)} >Log in</button>
            </p>
        </div>
    )
}
export default SignUpForm;