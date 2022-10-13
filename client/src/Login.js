import React, { useEffect, useState } from 'react';
import styles from "./Login.module.css"
import { loginValidate } from './loginValidate';
import axios from 'axios';
import { notify } from './Notifications';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
    // Edit Title
    document.title = "Login"
    // States
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    // Errors set
    const [errors, setErrors] = useState({})
    // Active Errors on Focuse !
    const [focus, setFocus] = useState({});
    // Functions
    // Change Inputs Value
    const changeHandelr = (event) => {
        setData({ ...data, [event.target.name]: [event.target.value] })
    }
    // Focus Set
    const focusHandeler = (event) => {
        setFocus({ ...focus, [event.target.name]: true })
    }
    // validate Data
    useEffect(() => {
        setErrors(loginValidate(data))
    }, [data], [focus])
    // Login Btn
    const loginBtn = () => {
        let flag = false;
        if (errors.email === true && errors.password === true) {
            const url = "https://jsonplaceholder.typicode.com/users";
            axios.get(url)
                .then(resp => {
                    if (resp.status === 200) {
                        for (let i in resp.data) {
                            // We dont have Password in this fake API so we gotta use zipcode !!
                            if (data.email === resp.data[i].email && data.password === resp.data[i].address.zipcode) {
                                flag = true;
                                setData({
                                    email: "",
                                    password: "",
                                });
                                setFocus({
                                    email: false,
                                    password: false,
                                });
                                break;
                            }
                        }
                        if (flag) {
                            notify("You have been successfully loged in", "succsess")
                        }
                        else {
                            notify("The Email or Password is wrong !", "invalid");
                            setData({
                                email: "",
                                password: "",
                            });
                        }
                    }
                })
        } else {
            setFocus({
                email: true,
                password: true,
            })
        }
    }
    return (
        // main form
        <form>
            {/* Form Titile  */}
            <h1 className="mainTitle">{document.title}</h1>

            {/* input Items */}
            <div className={styles.inputItems}>
                <label>Email</label>
                <input className={`${styles.inputs} ${errors.email !== true && focus.email === true ? styles.borderSetRed : styles.borderSetDefult}`} type="email" value={data.email} name="email" autoComplete="off" onChange={changeHandelr} onFocus={focusHandeler} />
                {focus.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.inputItems}>
                <label>Password</label>
                <input className={`${styles.inputs} ${errors.password !== true && focus.password === true ? styles.borderSetRed : styles.borderSetDefult}`} type="password" value={data.password} name="password" autoComplete="off" onChange={changeHandelr} onFocus={focusHandeler} />
                {focus.password && <span>{errors.password}</span>}
            </div>

            {/* Buttons */}
            <div id={styles.buttons}>
                <Link to="/Signup" id={styles.signup}>Sign Up</Link>
                <a href='login' onClick={loginBtn} id={styles.login}>Login</a>
            </div>
            <ToastContainer />
        </form>
    );
};

export default Login;