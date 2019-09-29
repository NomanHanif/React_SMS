import React, { useState } from 'react';
import { MDBInput } from 'mdbreact'

function InputBox() {

  let [name, setName] = useState("");

  return (
    <div >
      <MDBInput label="Type your name" value={name} name="Enter name" onChnage={o => setName(o.target.value)}  ></MDBInput>
    </div>
  );
}

export default InputBox;
