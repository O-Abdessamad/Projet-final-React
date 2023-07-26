import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import "./Login.scss";

export const Login = () => {
    const [valueinput1,setvalueinput1]=useState(0);
    const [valueinput2,setvalueinput2]=useState(0);


    const input1 = (event) =>{
        setvalueinput1(event.target.value);
    }
    const input2 = (event) =>{
        setvalueinput2(event.target.value);
    }
    let cox="";

    const clickmy= (e) =>{
        e.preventDefault();

        console.log(valueinput1,valueinput2);


        if (valueinput1 === "abdessamad" && valueinput2 === "123") {
            cox=true;
    
        } else {
            cox=false;

        }
    }

    return (
        <>
            <div className='page'>
                <div className='cover'>
                    <h1><FontAwesomeIcon icon={faRightToBracket} />  Login</h1>
                    <form className=' text-center' >
                        <input type="text" placeholder='username' onChange={(event) => {
                            input1(event)
                        }} />
                        <input type="password" placeholder='password' onChange={(event2) => {
                            input2(event2)
                        }} />
                        <input className='loginbtn' type="submit" value="Log In" onClick={clickmy} />
                    </form>
                </div>
            </div>

        </>


    );
}

