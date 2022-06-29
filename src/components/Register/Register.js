import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (

        <div id="form-box">
            <div className="login-form-container">
                <h2>Register</h2>
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
                        <label className="visually-hidden" htmlFor="inlineFormSelectPref">Password</label>
                        <div className="input-group">
                            <div className="input-group-text">Confirm Password</div>
                            <input type="password" className="form-control" id="inlineFormInputGroupPassword" placeholder="Confirm Password" />
                        </div>

                    </div>

                    <div className="col-12">
                        <p className="form-check-label" htmlFor="inlineFormCheck">
                            Already Have An Account? <Link to="/login">Login</Link>
                        </p>
                        <br />
                        <button type="submit" className=" btn-regular">Register</button>
                    </div>
                </form>
                <br />
                <p>----------------or----------------</p>
                <button className="btn-regular">Sign In with GOOGLE</button>
                <br />
                <span>New to ema-john?</span>
                <Link to="/register"> Create New Account</Link>
            </div>

        </div>
    );
};

export default Register;