import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import {data} from './../services'

const Details = (props) => {

    const [user, setUser] = useState(null);

    const setUserDetail = () => {




        const { id } = props.match.params;

        if (id) {
            const newUser = data.find((item) => `${item.id}` === id);
            setUser(newUser);
        }
    }

    useEffect(() => {
        // this is componentDidMount
        console.log("componentDidMount");
        setUserDetail();
    }, [])


    return (

        <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                    {user ? (
                        <MDBListGroup style={{ width: "22rem" }}>
                            <MDBListGroupItem key={user.id} ><b>ID</b> : {user.id}</MDBListGroupItem>
                            <MDBListGroupItem key={user.name} ><b>NAME </b> : {user.name}</MDBListGroupItem>
                            <MDBListGroupItem key={user.class} ><b>CLASS</b> : {user.class}</MDBListGroupItem>
                        </MDBListGroup>) : null}



                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}


export default Details;