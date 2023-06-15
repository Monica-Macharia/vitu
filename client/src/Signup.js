import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'


function Signup(){
    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    // const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
       
        name: "",
        gender: "",
        email: "",
        password: ""
      });
      const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
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
        .then(setInputs);
        navigate('./Signin')
    }
    return (
        // <form onSubmit={handleSubmit}>
        //    <label htmlFor="name">Name</label>
        //    <input
        //         type="text"
        //         id="name"
        //         name="name"
        //         onChange={handleChange}
        //         required/>
        //     <label htmlFor="gender">Gender</label>
        //    <input
        //         type="text"
        //         id="gender"
        //         name="gender"
        //         onChange={handleChange}
        //         required/>
        //     <label htmlFor="email">Email</label>
        //    <input
        //         type="text"
        //         id="email"
        //         name="email"
        //         onChange={handleChange}
        //         required/>
        //         <label htmlFor="password">Password</label>
        //    <input
        //         type="text"
        //         id="password"
        //         name="password"
        //         onChange={handleChange}
        //         required/>

        //         <button className="log" type="submit">Submit</button>
        //         </form>

                <form className="form" onSubmit={handleSubmit}>
                <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputName"  onChange={handleChange} aria-describedby="emailHelp"/>
                
                </div>
                <div class="mb-3">
                <label for="exampleInputGender" class="form-label">Gender</label>
                <input type="text" class="form-control" id="exampleInputGender"  onChange={handleChange} aria-describedby="emailHelp"/>
                
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1"  onChange={handleChange} aria-describedby="emailHelp"/>
                
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" onChange={handleChange}  id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" class="btn btn-primary">{" "}
                Sign Up{" "}</button>
                </form>
            
            
            
            
    );
}

export default Signup