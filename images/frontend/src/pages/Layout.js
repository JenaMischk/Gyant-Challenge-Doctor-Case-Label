import NavBar from './../components/NavBar';
import { Outlet } from "react-router-dom";

function Layout({ authenticatedUser, setAuthenticatedUser }) {
    return (
        <>
            <div className="App">
                <NavBar authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser}/>
                <div className="App-body">
                    <Outlet />      
                </div>
            </div>
        </>
    );
  }
  
  export default Layout;
  