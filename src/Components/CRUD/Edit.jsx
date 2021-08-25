import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { clientContext } from '../../Contexts/ClientContext';
import Header from '../aHeader/Header';
import Footer from '../zFooter/Footer';

const Edit = () => {
    const { edit, saveEditedProduct, theme } = useContext(clientContext)
    const history = useHistory()
    const { currentUser } = useAuth()
    const [editProduct, setEditProduct] = useState("")

    useEffect(() => {
        setEditProduct(edit)
    }, [edit])

    const handleInput = (e) => {
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        }
        setEditProduct(obj)
    }

    const handleClick = () => {
        saveEditedProduct(editProduct)
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
                                    <input value={editProduct.title} onChange={handleInput} name="title" />
                                </div>
                                <div className="input-block">
                                    <span>location</span>
                                    <input value={editProduct.location} onChange={handleInput} name="location" />
                                </div>
                                <div className="input-block">
                                    <span>phone number</span>
                                    <input value={editProduct.phone} onChange={handleInput} name="phone" />
                                </div>
                                <div className="input-block">
                                    <span>price</span>
                                    <input value={editProduct.price} onChange={handleInput} name="price" />
                                </div>
                                <div className="input-block">
                                    <span>Category</span>
                                    <input value={editProduct.category} onChange={handleInput} name="category" />
                                </div>
                                <div className="input-block">
                                    <span>image(url)</span>
                                    <input value={editProduct.image} onChange={handleInput} name="image" />
                                </div>
                                <div className="input-block">
                                    <span>description</span>
                                    <input value={editProduct.description} onChange={handleInput} name="description" />
                                </div>
                            </div>
                            <div className="btn-block">
                                <button onClick={handleClick}>Update</button>
                                <button onClick={() => history.push('/')}>Cancel</button>
                            </div>
                        </div>
                        <Footer />
                    </>
                ) : (null)
            }
        </>
    );
};

export default Edit;