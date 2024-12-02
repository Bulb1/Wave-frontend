import React from 'react';
import { useNavigate} from "react-router-dom";

//https://getbootstrap.com/docs/5.3/components/navbar/
export default function Navbar() {
    const navigate = useNavigate();

    const handleRegisterRedirect = () => {
        navigate("/Register");
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Wave Bank
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button onClick={handleRegisterRedirect }>
                        Add User
                    </button>
                </div>
            </nav>
        </div>
    )
}