import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
// import axios from "axios";
// import { setUserSession } from './commonfile';

function Login(){
 
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  // const [error, setError] = useState("")
  const navigate = useNavigate();


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

//  function onLogin(){
//    fetch('http://localhost:3000/login')
//    .then((response) => {
//      if(!response.ok){
//        throw new Error('Try later, network error');

//      }
//      return response.blob();
//    })
//    .then((user) => {
//      setValues(user)
//    })
//  }

//   const setUserSession = (token, user) => {
//     sessionStorage.setItem("token", token);
//     // sessionStorage.setItem("user", JSON.stringify(user));

// }
   

    
 
    // const handleLogin = () =>{

    //   axios.post("http://localhost:3000/login",{
    //     email: email,
    //     password: password

    //   }).then(response => {
    //     setUserSession(response.data.token, response.data.user)
    //   navigate('./Dashboard');
    // }).catch(error => {
    //   if(error.response.status === 401 || error.response.status === 400){
    //     setError(error.response.data.message); 
    //   }
    //   else{
    //     setError("Try again later")
    //   }
     
    // });
        
    
    function onLogin(e) {
      e.preventDefault();
      fetch("http://localhost:3000/login", {
          method: "POST",
          credentials: 'include',
          headers: {
              "Content-Type": "application/json",

          },
          body: JSON.stringify({
             values
          }),
      })

      .then((r) => r.json())
      .then(setValues);
      navigate('./Dashboard')

    //   .then((r) => {
    //   if (r.ok){
    //     console.log(r)
    //   r.json().then((user) =>{
       
    //         setValues(user)
    //         navigate('./Dashboard')
         
    // })
    //    }else{
    //        r.json().then((err) => setError
    //         (err.errors))
          
    //         navigate('./Dashboard')
    //     }
    //    })
    }
  
      
  
  return (
         
          <form className="form" onSubmit={onLogin}>
         
          
          <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1"  onChange={handleChange} aria-describedby="emailHelp"/>
          
          </div>
          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" onChange={handleChange}  id="exampleInputPassword1"/>
          </div>
          
          <button type="submit" class="btn btn-primary">{" "}
          Sign In{" "}</button>
          </form>
          
          
          
  );
}
export default Login;