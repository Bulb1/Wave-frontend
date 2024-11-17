import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
//https://getbootstrap.com/docs/5.3/forms/form-control/
export default function Register() {
    //Redirect to Login
    const navigate = useNavigate();
    const handleRedirectToLogin = () => {
        navigate('/Login');
    };

    // Initialize state for form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'USER' // Static role
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
        // Form submission logic (e.g., send data to an API)
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="mb-3 row">
                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputFirstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Last Name */}
                <div className="mb-3 row">
                    <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputLastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

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

                {/* Role (Static) */}
                <div className="mb-3 row">
                    <label htmlFor="inputRole" className="col-sm-2 col-form-label">Role</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputRole"
                            name="role"
                            value={formData.role}
                            readOnly
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mb-3 row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>

            {/* Redirect to Login Button */}
            <div className="mb-3 row">
                <div className="col-sm-10 offset-sm-2">
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={handleRedirectToLogin}
                    >
                        Already have an account? Login
                    </button>
                </div>
            </div>
        </div>
    );
}