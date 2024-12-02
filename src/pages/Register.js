import React, { useState } from 'react';
import axios from 'axios';
import { useRedirect } from "../navigation/RedirectHandlers";

export default function Register() {
    const handleRedirectToLogin = useRedirect('/Login');
    const handleRedirectToProfile = useRedirect('/Profile');

    // Initialize state for form fields
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "USER" // Static role
    });

    const [formError, setFormError] = useState(null); // To store form validation error messages
    const [isSubmitting, setIsSubmitting] = useState(false); // To show a loading indicator while submitting

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Validate form data before submission
    const validateForm = () => {
        const { firstName, lastName, email, password } = formData;
        if (!firstName || !lastName || !email || !password) {
            setFormError("All fields are required!");
            return false;
        }
        setFormError(null); // Clear error if validation passes
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form before proceeding
        if (validateForm()) {
            try {
                setIsSubmitting(true); // Set submitting state to true
                // Send form data to the backend API
                const response = await axios.post('http://localhost:1111/register', formData, {
                    headers: {
                        'Content-Type': 'application/json', // Ensure that the content type is set to JSON
                    }
                });

                console.log('Response from server:', response.data);

                // Redirect to the profile page after successful form submission
                handleRedirectToProfile();

            } catch (error) {
                console.error('Error during form submission:', error);
                setFormError('An error occurred while submitting the form. Please try again.');
            } finally {
                setIsSubmitting(false); // Set submitting state back to false
            }
        }
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


                {/* Error Message */}
                {formError && (
                    <div className="alert alert-danger" role="alert">
                        {formError}
                    </div>
                )}

                {/* Submit Button */}
                <div className="mb-3 row">
                    <div className="col-sm-10 offset-sm-2">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Register'}
                        </button>
                    </div>
                </div>
            </form>

            {/* Redirect to Login button */}
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
