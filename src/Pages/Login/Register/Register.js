import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }
    if (updating || loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate("/login");
        console.log("user", user)
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');

    };
    return (
        <div className="register-form">
            <h2 className="text-primary" style={{ textAlign: "center" }}>Please Register.</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Your Name" />

                <input type="email" name="email" id="" placeholder="Enter your email" required />

                <input type="password" name="password" id="" placeholder="Enter your Password" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">Accept Genius Terms and Condition</label>
                {/* <label className={agree ? "ps-2 text-primary" : "ps-2 text-danger"} htmlFor="terms">Accept Genius Terms and Condition</label> */}
                <input disabled={!agree} className="btn btn-primary w-50 mx-auto mt-2" type="submit" value="Register" />
            </form>
            <p>Already Have an account? <Link className="text-danger text-decoration-none" to="/login" onClick={navigateLogin}>Please LogIn</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;