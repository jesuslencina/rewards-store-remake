import axios from "axios";
import React, { useState, useEffect, createContext, ReactNode } from "react";
import { requestHeaders } from "../../utils/requestHeaders";
import { IUserData } from "../../utils/userData.interface";

interface ContextProperties {
    userData: IUserData;
    retrieveData: () => void;
}

const initialState: ContextProperties = {
    userData: { id: "0", name: "Cargando...", points: 0 },
    retrieveData: () => {},
};

export const context = createContext<ContextProperties>(initialState);

export const ContextWrapper = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState<IUserData>(initialState.userData);

    const retrieveData = () =>
        axios
            .get(`${import.meta.env.VITE_API_URL}/user/me`, requestHeaders)
            .then((response) => setUserData(response.data));

    useEffect(() => {
        retrieveData();
    }, []);

    //Return
    return (
        <context.Provider value={{ userData, retrieveData }}>
            {children}
        </context.Provider>
    );
};
