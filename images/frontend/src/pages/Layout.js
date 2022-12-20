import NavBar from './../components/NavBar';
import { Outlet } from "react-router-dom";

function Layout({ authenticatedUser }) {
    return (
        <>
            <div className="App">
                <NavBar authenticatedUser={authenticatedUser}/>
                <div className="App-body">
                    <Outlet />      
                </div>
            </div>
        </>
    );
  }
  
  export default Layout;
  