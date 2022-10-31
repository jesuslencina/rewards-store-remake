import axios from "axios";
import React, { useState, useEffect, createContext, ReactNode } from "react";
import { requestHeaders } from "../../utils/requestHeaders";
import { IUserData } from "../../utils/userData.interface";

interface ContextProperties {
    userData: IUserData;
    retrieveData: () => void;
    historyOpen: boolean;
    switchHistoryOpen: () => void;
}

const initialState: ContextProperties = {
    userData: { id: "0", name: "Cargando...", points: 0, redeemHistory: [] },
    retrieveData: () => {},
    historyOpen: false,
    switchHistoryOpen: () => {},
};

export const context = createContext<ContextProperties>(initialState);

export const ContextWrapper = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState<IUserData>(initialState.userData);
    const [historyOpen, setHistoryOpen] = useState<boolean>(false);

    const switchHistoryOpen = () => setHistoryOpen(!historyOpen);

    const retrieveData = () =>
        axios
            .get(`${import.meta.env.VITE_API_URL}/user/me`, requestHeaders)
            .then((response) => setUserData(response.data));

    useEffect(() => {
        retrieveData();
    }, []);

    //Return
    return (
        <context.Provider
            value={{ userData, retrieveData, historyOpen, switchHistoryOpen }}>
            {children}
        </context.Provider>
    );
};
