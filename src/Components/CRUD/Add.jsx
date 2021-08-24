import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../Contexts/ClientContext';

const Add = () => {
    const { createProduct } = useContext(clientContext)
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        category: '',
        image: '',
        description: ''
    })

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
            price: "",
            category: "",
            image: "",
            description: ""
        })
        history.push('/')
    }

    return (
        <div className="new-container">
            <div className="wrapper-add">
                <TextField value={newProduct.title} onChange={handleInput} name="title" label="title" />
                <TextField value={newProduct.price} onChange={handleInput} name="price" label="price" />
                <TextField value={newProduct.category} onChange={handleInput} name="category" label="category" />
                <TextField value={newProduct.image} onChange={handleInput} name="image" label="image" />
                <TextField value={newProduct.description} onChange={handleInput} name="description" label="description" />
                <Button onClick={handleClick} variant="contained" color="primary">Add</Button>
                <Button onClick={() => history.push('/')} variant="contained" color="secondary">Close</Button>
            </div>
        </div>
    );
};

export default Add;