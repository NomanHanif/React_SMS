import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact'
import React, { useState } from 'react'

const Array = () => {

    let [items, setItems] = useState([]);
    let [name, setName] = useState("");
    let [age, setAge] = useState(0);
    let [className, setClass] = useState("");

    const addIitem = () => {
        const newItem = [...items];

        newItem.push({
            name: name,
            age: age,
            className: className
        });
        setItems(newItem);

    }

    const removeIitem = () => {

        const newItem = [...items];

        newItem.pop();

        setItems(newItem);
    }





    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">

                    <MDBInput
                        label="Type your name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={name}
                        onChange={o => setName(o.target.value)}
                    />

                    <MDBInput
                        label="Type your age"
                        group
                        type="number"
                        validate
                        error="wrong"
                        success="right"
                        value={age}
                        onChange={o => setAge(o.target.value)}
                    />

                    <MDBInput
                        label="Type your class"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={className}
                        onChange={o => setClass(o.target.value)}
                    />

                    <MDBBtn onClick={() => { addIitem() }} >Add Item</MDBBtn>
                    <MDBBtn onClick={() => { removeIitem() }} >Remove Item</MDBBtn>




                </MDBCol>
                <MDBCol md="6">
                    <ul class="list-group"  >

                        {

                            items.map((item, index) => {

                                return <li class="list-group-item" key={item.index}>{item.name} - {item.age} - {item.className} </li>
                            })
                        }

                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Array