import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ReviewCases from './pages/ReviewCases';



function App() {

  const [authenticatedUser, setAuthenticatedUser] = useState(false); 

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <Layout 
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
          />
        }>

          <Route index element={
            <Home
              authenticatedUser={authenticatedUser} 
            />}
          />

          <Route path="login" element={
            <Login 
              authenticatedUser={authenticatedUser}
              setAuthenticatedUser={setAuthenticatedUser}
            />
          }/>

          <Route path="cases" element={
            <ReviewCases 
              authenticatedUser={authenticatedUser}
            />
          }/>

          <Route path="createaccount" element={<CreateAccount setAuthenticatedUser={setAuthenticatedUser}/>} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
