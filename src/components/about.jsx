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
         
            props.history.push("/detail/1");
          }}>Go 1 </MDBBtn>
        <MDBBtn onClick={ o => {props.history.push("/detail/2")}}>Go 2 </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;