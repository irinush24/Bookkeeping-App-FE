import React from "react";
import { useAuth } from "../../context/AuthContext";

export const AuthenticatedTemplate = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    if(!isAuthenticated) return null;
    return <>{children}</>;
}

export const UnauthenticatedTemplate = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    if(isAuthenticated) return null;
    return <>{children}</>;
}