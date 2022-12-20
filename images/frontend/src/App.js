import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from './pages/Login';
import { useState } from 'react';


function App() {

  const [authenticatedUser, setAuthenticatedUser] = useState(false); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout authenticatedUser={authenticatedUser} />}>
          <Route index element={<Home />} />
          <Route path="login" element={
            <Login 
              authenticatedUser={authenticatedUser}
              setAuthenticatedUser={setAuthenticatedUser}
            />
          }/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
