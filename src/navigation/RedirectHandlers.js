import { useNavigate } from "react-router-dom";

export const useRedirect = (path) => {
    const navigate = useNavigate();
    return () => navigate(path);
};
