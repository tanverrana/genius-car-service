import React from 'react';
import google from "../../../images/social/google-logo.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigat = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <p className="text-danger">Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if (user || user1) {
        navigat("/home");
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">OR</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-info w-50 d-block mx-auto my-3">
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className="px-2">Google Sign In</span>
                </button>
                <button className="btn btn-info w-50 d-block mx-auto my-2">
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    <span className="px-2">Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className="btn btn-info w-50 d-block mx-auto my-3">
                    <img style={{ width: "35px" }} src={github} alt="" />
                    <span className="px-2">Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;