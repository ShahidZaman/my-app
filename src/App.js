// import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import About from './components/About';
import PropTypes from 'prop-types';
import React, { useState } from 'react'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  
  }

  const toggleMode =()=>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been enabled','success')
      document.title = 'Textutils - Dark mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('light mode has been enabled','success')
      document.title = 'Textutils - light mode'
    }
    
  }


  return (
    <>
    <Router>
      <Navbar title="Textutils" home_text="Home" mode={mode} toggleMode={toggleMode} />  
      <Alert alert={alert}/>

      <Switch>
      <Route exact path="/about">
      <About />
      </Route>
      <Route exact path="/">
      <Textform showAlert={showAlert}  heading="Enter the text below to analyse" mode={mode} />
      </Route>
      </Switch>
    </Router>

    </>
  );
}

  Navbar.propTypes = {
  title: PropTypes.string,
  home_text: PropTypes.string 
  }


export default App;
