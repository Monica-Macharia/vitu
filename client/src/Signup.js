import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'


function Signup(){
    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    // const [email, setEmail] = useState("");
    // const navigate = useNavigate();
    const [inputs, setInputs] = useState({
       
        name: "",
        gender: "",
        email: "",
        password: ""
      });
      const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
      }
      function myFunction() {
        alert("User Sucessfully created!")
    }
   

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
               inputs
            }),
        })
        .then((r) => r.json())
        .then((inputs) => setInputs(
            inputs));
        // console.log(inputs)
        myFunction();
        // navigate('./Signin')
    }
    return (
        <form onSubmit={handleSubmit}>
           <label htmlFor="name">Name</label>
           <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required/>
            <label htmlFor="gender">Gender</label>
           <input
                type="text"
                id="gender"
                name="gender"
                onChange={handleChange}
                required/>
            <label htmlFor="email">Email</label>
           <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                required/>
                <label htmlFor="password">Password</label>
           <input
                type="text"
                id="password"
                name="password"
                onChange={handleChange}
                required/>

                <button className="log" type="submit">Submit</button>
                </form>
            
            
            
            
    );
}

export default Signup