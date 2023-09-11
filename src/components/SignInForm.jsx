import React, { useState } from "react";
//import axios from "axios";

export default function SignInForm(props) {
const [signIn, setSignIn] = useState ({
    username: "",
    password: "",
})

function handleChange(e) {
    const { name, value } = e.target;

    setSignIn({
      ...signIn,
      [name]: value,
    });
}

const handleSubmit = (e) => {
    e.preventDefault()
    //getComment(newSignInForm)
}
/*
const getComment = (newSignInForm) => {
    const {username, password} = newSignInForm

}
*/

return (
    <>
<form className="signInForm" onSubmit={handleSubmit}>
            <h1>Sign in:</h1>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            value={signIn.userName}
            onChange={handleChange}
            required
            ></input>
        <br></br>
        <br></br>
            <label htmlFor="password">Password:
            </label>
            <br></br>
            <input
            type="text"
            id="password"
            name="password"
            value={signIn.passWord}
            onChange={handleChange}
            required
            ></input>
        <br></br>
        <br></br>
    <button>Sign in</button>
</form>
<br></br>
</>
)
}