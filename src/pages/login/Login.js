import React from "react";
import "./Login.css"
import {useRef, useContext} from 'react'
// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";
export const Login = () => {
    const email = useRef();
    const password = useRef();
    // const {isFetching, dispatch} = useContext(AuthContext)

    
    const handleSubmit=(e)=>{
        e.preventDefault()
        // loginCall({email: email.current.value, password: password.current.value},dispatch)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSubmit(event)
        }
      }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">GoMovie</h3>
                <span className="loginDesc">
                 - is the leading subscription service for watching TV episodes and movies.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleSubmit}>
                    <input placeholder="Email" type="email" ref={email} className="loginInput" required autoFocus/>
                    <input placeholder="Password" type="password" minLength="7" ref={password} className="loginInput" required/>
                    <button className="loginButton" type="submit" onKeyUp={handleKeyPress}
                    >Log In</button>
                </form>
            </div>
        </div>
    </div>
  )
}