import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextApp = ({ children }) => {

    const [token, setToken] = useState(sessionStorage.getItem("TOKEN_API"));
    const [userName, setUserName] = useState(sessionStorage.getItem("NAME_MAHALO") ?? null);
    const [roleCode, setRoleCode] = useState(sessionStorage.getItem("ROL_CODE") ?? null);

    const getToken = token => {
        setToken(token);
        sessionStorage.setItem("TOKEN_API", token);
    }

    const getName = name => {
        setUserName(name);
        sessionStorage.setItem("NAME_MAHALO", name);
    }

    const getRol = rol => {
        setRoleCode(rol);
        sessionStorage.setItem("ROL_CODE", rol);
    }

    // const colorApp = '#2196F3';
    const colorApp = '#000000';
    const classColorApp = `bg-[${colorApp}]`;

    return (
        <StateContext.Provider
            value={{
                roleCode,
                userName,
                getName,
                getRol,
                token,
                colorApp,
                classColorApp,
                getToken
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);