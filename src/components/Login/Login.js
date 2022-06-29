import React, { useEffect } from 'react';
import "./Login.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    const { user, signInWithGoogle } = useAuth();
    const location = useLocation();
    console.log("Location: ", location);
    const navigate = useNavigate();
    useEffect(() => {
        console.log("ami log iner use effecte achei");
        if (user.email && location.state?.from) {
            navigate(`${location.state?.from}`, {
                state: { from: location.pathname }
            })
        }
    }, [user])
    return (
        <div id="form-box">
            <div className="login-form-container">
                <h2>Login</h2>
                <br />
                <form className="row row-cols-lg-auto g-3 align-items-center">
                    <div className="col-12">
                        <label className="visually-hidden" htmlFor="inlineFormInputGroupPassword">Email</label>
                        <div className="input-group">
                            <div className="input-group-text">Email</div>
                            <input type="email" className="form-control" id="inlineFormInputGroupPassword" placeholder="Your Email" />
                        </div>
                    </div>

                    <div className="col-12">
                        <label className="visually-hidden" htmlFor="inlineFormSelectPref">Password</label>
                        <div className="input-group">
                            <div className="input-group-text">Password</div>
                            <input type="password" className="form-control" id="inlineFormInputGroupPassword" placeholder="Password" />
                        </div>

                    </div>

                    <div className="col-12">
                        <button type="submit" className=" btn-regular">Submit</button>
                    </div>
                </form>
                <br />
                <p>----------------or----------------</p>
                <button className="btn-regular" onClick={signInWithGoogle} >Sign In with GOOGLE</button>
                <br />
                <span>New to ema-john?</span>
                <Link to="/register">Create New Account</Link>
            </div>

        </div>
    );
};

export default Login;

