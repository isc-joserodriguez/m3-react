import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { signupService } from '../../services'

const Signup = () => {
    const { user, login } = useContext(UserContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        const user = await signupService(dataObject)
        login(user.detail);
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
            {user?.token}
        </form >
    )
}

export default Signup
