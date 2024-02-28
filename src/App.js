import "./App.css";
import Layout from "./components/Layout";
import Findjob from "./components/Findjob";
import Postjob from "./components/Postjob";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Signup";
import AboutPage from "./components/About";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={ userstate && userstate._id ? ( <Profile setUserState={setUserState} username={userstate.fname} />) : 
          (
                <Login setUserState={setUserState} />
          ) } ></Route>
          <Route  path="/Login" element={<Login setUserState={setUserState} />} ></Route>
          <Route path="/Signup" element={<Register />}/>
          <Route path='/FINDJOB' element={<Findjob />}/>
          <Route path='/POSTJOB' element={<Postjob />}/>
          <Route path='/About' element={<AboutPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
