import React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { clientContext } from '../../Contexts/ClientContext';
import Header from '../aHeader/Header';
import Footer from '../zFooter/Footer';

const Add = () => {
    const { createProduct, theme } = useContext(clientContext)
    const { currentUser } = useAuth()
    const [newProduct, setNewProduct] = useState({
        title: '',
        location: '',
        phone: '',
        price: '',
        category: '',
        image: '',
        description: '',
        user: currentUser.email,
        id: new Date().valueOf(),
    })
    console.log(currentUser);

    const history = useHistory();

    function handleInput(e) {
        let obj = {
            ...newProduct,
            [e.target.name]: e.target.value
        }
        setNewProduct(obj)
    }

    function handleClick() {
        createProduct(newProduct)
        setNewProduct({
            title: "",
            location: "",
            phone: "",
            price: "",
            category: "",
            image: "",
            description: "",
        })
        history.push('/')
    }

    return (
        <>
            {
                currentUser ? (
                    <>
                        <Header />
                        <div className={`${theme} add-container`}>
                            <div className="add-block">
                                <div className="input-block">
                                    <span>title</span>
                                    <input value={newProduct.title} onChange={handleInput} name="title" />
                                </div>
                                <div className="input-block">
                                    <span>location</span>
                                    <input value={newProduct.location} onChange={handleInput} name="location" />
                                </div>
                                <div className="input-block">
                                    <span>phone number</span>
                                    <input value={newProduct.phone} onChange={handleInput} name="phone" />
                                </div>
                                <div className="input-block">
                                    <span>price</span>
                                    <input value={newProduct.price} onChange={handleInput} name="price" />
                                </div>
                                <div className="input-block">
                                    <span>Category</span>
                                    <input value={newProduct.category} onChange={handleInput} name="category" />
                                </div>
                                <div className="input-block">
                                    <span>image(url)</span>
                                    <input value={newProduct.image} onChange={handleInput} name="image" />
                                </div>
                                <div className="input-block">
                                    <span>description</span>
                                    <input value={newProduct.description} onChange={handleInput} name="description" />
                                </div>
                            </div>
                            <div className="btn-block">
                                <button onClick={handleClick}>Add</button>
                                <button onClick={() => history.push('/')}>Close</button>
                            </div>
                        </div>
                        <Footer />
                    </>
                ) : (null)
            }
        </>
    );
};

export default Add;