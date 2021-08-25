import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { clientContext } from '../../Contexts/ClientContext';
import Header from '../aHeader/Header';
import Footer from '../zFooter/Footer';
import Card from './Card/Card';
import './Content.css';

const List = () => {
    const [x, setX] = useState()
    const [y, setY] = useState()
    const { mode, products } = useContext(clientContext)
    const { currentUser } = useAuth()
    const history = useHistory()

    const handleMouseMove = event => {
        setX(event.clientX)
        setY(event.clientY)
    }

    const goToAdd = () => {
        history.push("/add")
    }

    return (
        <>
            <div onMouseMove={handleMouseMove}>
                <Header />
                <>
                    <div className={`${mode ? "dark" : "light"} list`}>
                        {
                            products ? (
                                products.length ? (
                                    products.map(product => <Card coordinates={{ x, y }} key={product.id} product={product} />)
                                ) : (
                                    <h1>Empty</h1>
                                )
                            ) : (
                                <h1>loading...</h1>
                            )
                        }
                    </div >
                </>
                {
                    currentUser ? (
                        <>
                            <div className={`${mode ? "dark" : "light"} list-head`}>
                                <h2>My books:</h2>
                                <button onClick={goToAdd}>+</button>
                            </div>
                            <div className={`${mode ? "dark" : "light"} list`}>
                                {
                                    products ? (
                                        products.length ? (
                                            products.map(product => currentUser.email ? <Card coordinates={{ x, y }} key={product.id} product={product} /> : null)
                                        ) : (
                                            <h1>Empty</h1>
                                        )
                                    ) : (
                                        <h1>loading...</h1>
                                    )
                                }
                            </div >
                        </>
                    ) : (null)
                }
                <Footer />
            </div>
        </>
    );
};

export default List;