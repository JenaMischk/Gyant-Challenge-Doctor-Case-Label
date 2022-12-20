import { useState } from 'react';
import { useNavigate } from "react-router-dom";


async function createUser(credentials) {
    return fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json());
}


function CreateAccount({ setAuthenticatedUser }) {

    const navigate = useNavigate();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await createUser({
          name: username.replace(/\s+/g,'').toLowerCase(),
          displayName: username,
          password: password
        });
        setAuthenticatedUser(token.displayName);
        navigate('/');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required
                    onChange={e => setUserName(e.target.value)}/>

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required
                    onChange={e => setPassword(e.target.value)}/>

                <button type="submit">Register Account</button>

            </form>
        </>
    );
  }
  
  export default CreateAccount;
  