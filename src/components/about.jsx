import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdbreact";

const About = (props) => {

  
  console.log(props)

  return (
    
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <h1>About</h1>
        <MDBBtn onClick={ o => {
          setTimeout(function() {
            props.history.push("/");
          }, 5000);
          }}>Go to Home </MDBBtn>
        <MDBBtn onClick={ o => {props.history.push("/contact")}}>Go to Contact </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;