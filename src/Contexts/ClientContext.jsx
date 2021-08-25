import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { JSON_API } from '../helpers/constants';

export const clientContext = React.createContext()

const INIT_STATE = {
    products: null,
    edit: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
        case "GET_PRODUCT_TO_EDIT":
            return { ...state, edit: action.payload }
        default:
            return state
    }
}

const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const [mode, setMode] = useState(false)
    const theme = mode ? "dark" : "light"
    const shadow = mode ? "#d57cff" : "#666666"
    const shadowAbout = { boxShadow: `2px 2px 7px 0px ${shadow}` }
    const history = useHistory();
    const [filterToggle, setFilterToggle] = useState(false);
    const [navMenuToggle, setNavMenuToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const [mainPage, setMainPage] = useState(true);
    const [aboutProduct, setAboutProduct] = useState('');

    //CRUD
    async function getProducts() {
        const search = new URLSearchParams(window.location.search);
        search.set('_limit', 4)
        history ? (history.push(`${history.location.pathname}?${search.toString()}`)) : (console.log(null))
        const { data } = await axios(`${JSON_API}/${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    async function createProduct(newProduct) {
        await axios.post(JSON_API, newProduct)
        getProducts()
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${JSON_API}/${id}`)
        getProducts()
    }

    const getProductToEdit = async (id) => {
        const { data } = await axios(`${JSON_API}/${id}`)

        dispatch({
            type: "GET_PRODUCT_TO_EDIT",
            payload: data
        })
    }

    const saveEditedProduct = async (product) => {
        await axios.patch(`${JSON_API}/${product.id}`, product)
        getProducts()
    }

    // design
    const handleMode = () => {
        setMode(!mode);
        localStorage.setItem('mode', mode)
        localStorage.getItem('mode')
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

    const handleMenu = () => {
        setNavMenuToggle(!navMenuToggle)
    }

    const blockShadowStyle = {
        boxShadow: `0px 0px 10px 0px ${shadow}`
    }

    return (
        <clientContext.Provider value={{
            mode,
            theme,
            shadow,
            shadowAbout,
            filterToggle,
            blockShadowStyle,
            profileToggle,
            mainPage,
            navMenuToggle,
            products: state.products,
            edit: state.edit,
            aboutProduct,
            handleMode,
            createProduct,
            filterDropDown,
            profileDropDown,
            handleMainPage,
            handleMenu,
            getProducts,
            deleteProduct,
            getProductToEdit,
            saveEditedProduct,
            setAboutProduct,
        }
        }>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;