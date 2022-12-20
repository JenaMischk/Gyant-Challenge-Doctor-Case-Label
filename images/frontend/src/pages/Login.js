import { useState } from 'react';
import { Link } from 'react-router-dom';



function Login({ authenticatedUser, setAuthenticatedUser }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        setAuthenticatedUser(username);
    }

    function logout(e) {
        e.preventDefault();
        setAuthenticatedUser(false);
    };

    return (
        <>

            <h2>Login</h2>

            <br/>

            {
                authenticatedUser ?

                    <>
                        <p>
                            Your are logged in as {authenticatedUser}.
                        </p> 
                        <button onClick={logout}>
                            Logout
                        </button>
                    </> :

                    <>
                        <form onSubmit={handleSubmit}>

                            <label htmlFor="username"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="username" required
                                onChange={e => setUserName(e.target.value)}/>
            
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" required
                                onChange={e => setPassword(e.target.value)}/>

                            <button type="submit">Login</button>

                        </form>

                        <br/>

                        <div>
                            <h2>Don't have a user account? <Link to="../createaccount">Create one now</Link></h2>
                        </div>
                    </>

            }

        </>
    );
  }
  
  export default Login;
  