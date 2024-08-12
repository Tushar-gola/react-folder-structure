import { Navigate } from "react-router-dom";
// import { useAuth } from "hooks"; // Assumes you have a custom hook for authentication
import { urls } from "routes";

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
    // const { isAuthenticated } = useAuth(); // Custom hook to check authentication
    const isAuthenticated  = false; // Custom hook to check authentication

    if (!isAuthenticated) {
        return <Navigate to={urls.LOGIN} />;
    }

    return children;
};
