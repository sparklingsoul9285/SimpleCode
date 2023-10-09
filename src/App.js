// class is replaced by className, for is replaced by htmlFor 
// tab is replaced by tabIndex
// whereever we want to use javascript in jsx we'll use curly brackets "{}"

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  // function for dark/light mode
  const [mode, setMode] = useState('light');  // whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode has been enabled", "success");
      document.title = "SimpleCode - Dark Mode";
      // setInterval(()=>{                                 // title ko chamkaye kaise use this
      //   document.title = "SimpleCode is good to use";
      // },2000)
      // setInterval(()=>{
      //   document.title = "Install SimpleCode";
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("DarkMode has been disabled", "success");
      document.title = "SimpleCode - Light Mode";
    }
  }

  return (
    <>
    
      {/* <Navbar title="SimpleCode" aboutText="About Us" contactText="Contact"/> */}
      <Router>
      <Navbar title="SimpleCode" contactText="Contact" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <Routes>

          {/* react use partial matching that's why
          /users --> component 1
          /users/home --> component 2 */}

          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>}>
          </Route>
        </Routes>
      </div>
      </Router>    
    </>
  );
}

export default App;


// Props - Basically values are passed from app.js and Navbar.js (component) accepts the values.
/* Example : we have 2 files app.js and a component named Navbar.js 
   In app.js, we have
                 <Navbar title = "Header"/>
   In Navbar.js, we will use,
                 in <li> tag in place of title we will use {props.title}
  so it can easily fetch and render the values
  that's how the props works.
 */
// default proptypes - if we haven't pass props values in app.js file then we can use this prop as default in component.

