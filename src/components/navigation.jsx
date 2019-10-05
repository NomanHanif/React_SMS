import React from 'react'
import {Link } from 'react-router-dom'


const Navigation = () =>{

    return (

        <div>
                <Link to="/home" >Home</Link>
                <Link to="/contact" >Contact</Link>
                <Link to="/about" >About</Link>
              </div>
    );


}

export default Navigation;


