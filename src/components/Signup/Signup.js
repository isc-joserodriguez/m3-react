import React from 'react'
import { signupService } from '../../services'

const Signup = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        const user = await signupService(dataObject)
        console.log(user);
        e.target.reset();
    };
    return (
        <form onSubmit={onSubmit} >
            <input type="text" placeholder="Nombre" name="firstname" />
            <br /><br />
            <input type="text" placeholder="Email" name="mail" />
            <br /><br />
            <input type="password" placeholder="Password" name="password" />
            <br /><br />
            <input type="submit" value="Signup" />
        </form >
    )
}

export default Signup
