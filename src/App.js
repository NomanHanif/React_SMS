import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Route } from
  "react-router-dom";
import SignIn from './components/signin';
import SignUp from './components/signup';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact'
import Array from './components/Array'
// import {  makeStyles } from '@material-ui/core/styles';

function App() {

  // const useStyles = () => makeStyles(theme => {
    
  //   // topMarging:{
  //   //   margin:50;
  //   // }
  // });

  //const classes = useStyles();


  return (
    <div >
      <Router>
        {<NavBar />}
        {/* <SignUp/> */}
        <MDBContainer style={{marginTop:'70px'}}>
        
          <MDBRow>
            
            <MDBCol size="6">
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/array" component={Array} />
            </MDBCol>
            <MDBCol size="6"></MDBCol>

          </MDBRow>
        </MDBContainer>

      </Router>
    </div>
  );
}

export default App;
