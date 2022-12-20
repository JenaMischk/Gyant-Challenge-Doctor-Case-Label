import { useState } from 'react';


function Login({ authenticatedUser, setAuthenticatedUser }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password);
        setAuthenticatedUser(username);
    }

    return (
        <>

            <h2>Login</h2>

            <br/>

            {
                authenticatedUser ?
                    
                    <p>
                        Your are logged in as {authenticatedUser}
                    </p> 
                    
                    :

                    <form onSubmit={handleSubmit}>

                        <label htmlFor="username"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" onChange={e => setUserName(e.target.value)}/>
        
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" onChange={e => setPassword(e.target.value)}/>
        
                        <button type="submit">Login</button>
        
                    </form>

            }


        </>
    );
  }
  
  export default Login;
  