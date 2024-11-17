import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    // Initialize state for form fields
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // useNavigate hook for redirecting
    const navigate = useNavigate();

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
        // Login logic (e.g., send data to API or check credentials)
        console.log('Login attempted with:', formData);

        // For now, simulate successful login and redirect to home page
        // In a real app, you would handle the response from the login API here
        navigate('/');
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
                        onClick={() => navigate('/Register')}
                    >
                        Don't have an account? Register
                    </button>
                </div>
            </div>
        </div>
    );
}
