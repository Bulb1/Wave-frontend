import React, { useState } from 'react';
import { useRedirect } from '../navigation/RedirectHandlers';
import { useUser } from '../context/UserContext'; // Import the context

export default function Login() {
    const { loginUser } = useUser(); // Get the loginUser function from context
    const handleRedirectToRegister = useRedirect('/register');
    const handleRedirectToProfile = useRedirect('/profile');

    // Initialize state for form fields
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a successful login with the entered email
        const loggedInUser = {
            email: formData.email,
            name: 'John Doe',  //TODO: get user's name from database (findByEmail)
        };

        // Update the user data in context
        loginUser(loggedInUser);

        // Simulate redirect to profile
        handleRedirectToProfile();
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Login Button */}
                <div className="mb-3 row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>

            {/* Redirect to Register Button */}
            <div className="mb-3 row">
                <div className="col-sm-10 offset-sm-2">
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={handleRedirectToRegister}
                    >
                        Don't have an account? Register
                    </button>
                </div>
            </div>
        </div>
    );
}
