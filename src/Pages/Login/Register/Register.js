import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }

    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target.name.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


    }
    return (
        <div className="register-form">
            <h2 style={{ textAlign: "center" }}>Please Register.</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Your Name" />

                <input type="email" name="email" id="" placeholder="Enter your email" required />

                <input type="password" name="" id="" placeholder="Enter your Password" required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an account? <Link className="text-danger text-decoration-none" to="/login" onClick={navigateLogin}>Please LogIn</Link></p>
        </div>
    );
};

export default Register;