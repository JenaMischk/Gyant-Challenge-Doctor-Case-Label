import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function Login({ authenticatedUser, setAuthenticatedUser }) {

    const navigate = useNavigate();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState();

    async function loginUser(credentials) {
        return fetch('http://localhost:4000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(data => data.json())
        .catch(err => {
            console.log(err.toString());
            setError('Incorrect authentication data');
            document.getElementById('login-form').reset();
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          name: username.replace(/\s+/g,'').toLowerCase(),
          displayName: username,
          password: password
        });
        if(token){
            setAuthenticatedUser(token.displayName ? token.displayName : false);
            navigate('/');
        }
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
                            You are logged in as {authenticatedUser}.
                        </p> 
                        <button onClick={logout}>
                            Logout
                        </button>
                    </> :

                    <>
                        <form id='login-form' onSubmit={handleSubmit}>

                            <label htmlFor="username"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="username" required
                                onChange={e => setUserName(e.target.value)}/>
            
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" required
                                onChange={e => setPassword(e.target.value)}/>

                            <button type="submit">Login</button>

                        </form>

                        {
                            error ?
                                <>
                                    <br/>
                                    <p>Error: {error}</p>
                                </> : 
                                ''
                        }

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
  