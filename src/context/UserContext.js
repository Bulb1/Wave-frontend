import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => {
    return useContext(UserContext);
};

// Context provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store user data in state

    const loginUser = (userData) => {
        setUser(userData); // Set user data after login
    };

    const logoutUser = () => {
        setUser(null); // Clear user data on logout
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
