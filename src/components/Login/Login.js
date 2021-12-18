import React from 'react'

const Login = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        console.log(dataObject);
        e.target.reset();
    };
    return (
        <form onSubmit={onSubmit} >
            <input type="text" placeholder="Email" name="mail" />
            <br /><br />
            <input type="password" placeholder="Password" name="password" />
            <br /><br />
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login
