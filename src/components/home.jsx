import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

import {data} from './../services'

const Home = (props) => {

 


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <h1>Home</h1>

          <MDBListGroup style={{ width: "22rem" }}>

            { data ? (
              data.map((i, o) => {
                return <MDBListGroupItem key={o} onClick={ o => {props.history.push(`/detail/${i.id}/${i.name}`) }} >{i.name}</MDBListGroupItem>
              })) : null
            }
          </MDBListGroup>



        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;