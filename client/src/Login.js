import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'

function Login(props){
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // const [error, setError] = useState(null)
   const navigate = useNavigate(); 

    
 
    const handleLogin = () =>{
        navigate('./Dashboard');
    }
//     function onLogin(e) {
//       e.preventDefault();
//       fetch("/login", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",

//           },
//           body: JSON.stringify({
//               email,
//               password,
//           }),
//       })
//       .then((r) => r.json())
//       .then(onLogin);
//   }
  return (
    //   <form onSubmit={handleSubmit}>
         
         <form>
          <label htmlFor="email">Email</label>
         <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(
                  e.target.value
              )}
              required/>
              <label htmlFor="password">Password</label>
         <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(
                  e.target.value
              )}
              required/>
              {/* {error && <div className="error">{error}</div>} */}
        
              <button type="submit" onClick={handleLogin}> {" "}
        Log In{" "}</button>
              </form>
          
          
          
          
  );
}
export default Login;