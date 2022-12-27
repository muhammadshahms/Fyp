import React from "react";
import ReactDOM from "react-dom";
import SignInSide from "./SignInSide";
import SignUpSide from "./SignUpSide";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
        <Route path='/' element={<SignInSide/>}/>
        <Route path='/SignIn' element={<SignInSide/>}/>
        <Route path='/SignUp' element={<SignUpSide/>}/>    
      </Routes>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
