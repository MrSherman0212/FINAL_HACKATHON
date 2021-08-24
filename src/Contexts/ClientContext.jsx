import axios from 'axios';
import React, { useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { JSON_API } from '../helpers/constants';

export const clientContext = React.createContext()

const INIT_STATE = {
    products: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
        default:
            return state
    }
}

const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const [mode, setMode] = useState(false)
    const theme = mode ? "dark" : "light"
    const shadow = mode ? "#d57cff" : "#666666"
    const history = useHistory();
    const [filterToggle, setFilterToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const [mainPage, setMainPage] = useState(true);

    const getProducts = async () => {
        const search = new URLSearchParams(window.location.search);
        search.set('_limit', 4)
        history ? (history.push(`${history.location.pathname}?${search.toString()}`)) : (console.log(null))
        const { data } = await axios(`${JSON_API}/${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    const handleMode = () => {
        setMode(!mode);
        localStorage.setItem('mode', mode)
        localStorage.getItem('mode')
    }
    const createProduct = async (newProduct) => {
        await axios.post(JSON_API, newProduct)
        getProducts()
    }

    const filterDropDown = () => {
        setFilterToggle(!filterToggle)
    }

    const profileDropDown = () => {
        setProfileToggle(!profileToggle)
    }

    const handleMainPage = () => {
        setMainPage(!mainPage)
    }

    const blockShadowStyle = {
        boxShadow: `0px 0px 10px 0px ${shadow}`
    }

    return (
        <clientContext.Provider value={{
            mode,
            theme,
            shadow,
            filterToggle,
            blockShadowStyle,
            profileToggle,
            mainPage,
            handleMode,
            createProduct,
            filterDropDown,
            profileDropDown,
            handleMainPage,
        }
        }>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;