import React from 'react';
import { BrowserRouter, Route, Redirect } from
  "react-router-dom";
// import SignIn from './components/signin';
// import SignUp from './components/signup';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact'
// import {  makeStyles } from '@material-ui/core/styles';
import NavBar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Navigation from './components/navigation'

function App() {

  // const useStyles = () => makeStyles(theme => {

  //   // topMarging:{
  //   //   margin:50;
  //   // }
  // });

  // const classes = useStyles();


  return (
    <div >
       
      <BrowserRouter>
      <NavBar/>
        {/* <SignUp/> */}
        <MDBContainer style={{ marginTop: '70px' }}>
         
          <MDBRow>
            <MDBCol size="12"></MDBCol>
            <MDBCol size="12">
            <Navigation />
              {/* <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} /> */}
              <Route exact path="/" component={Home}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>

              {<Redirect  to="/" />}
            </MDBCol>
            <MDBCol size="4"></MDBCol>

          </MDBRow>
        </MDBContainer>

      </BrowserRouter>
    </div>
  );
}

export default App;
