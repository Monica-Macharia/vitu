import React, {useState} from 'react';
import Error from "./Error"
import './LoginForm.css'

function LoginForm({onLogin, setShowLogin}) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e){
        const name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });

        setFormData({
            username: '',
            password: ''
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete='off'
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="submit" 
                    value={isLoading ? "Logging in..." : "Login"} 
                />
        </form>
        {errors.map((error) => {
            return <Error key={error} error={error} />
        })}
        <hr className='hr-login' />
        <p className='sign-up-redirect'>
            Don't have an account? <button className="sign-up-redirect-btn" onClick={() => setShowLogin(false)} >Register</button>
        </p>
    </div>
  );
}
export default LoginForm;