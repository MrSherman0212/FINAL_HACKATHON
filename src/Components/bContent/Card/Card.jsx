import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';
import { clientContext } from '../../../Contexts/ClientContext';

const Card = ({ product }) => {
    const { getProductToEdit, deleteProduct, setAboutProduct } = useContext(clientContext)
    const { currentUser } = useAuth();
    const history = useHistory();

    function goToEdit() {
        getProductToEdit(product.id)
        history.push("/edit")
    }

    const handleAdout = (e) => {
        setAboutProduct(e)
        history.push("/about")
    }

    return (
        <>
            <div className="img" onClick={() => handleAdout(product)}>
                <img src={product.image} alt="" />
            </div>
            <div className="bar">
                <h3>{product.title}</h3>
                {
                    parseInt(product.price) >= 0 ? (
                        <h4>{product.price}</h4>
                    ) : (
                        <h4>Free</h4>
                    )
                }
            </div>
            {
                currentUser ? (
                    currentUser.email === product.user ? (
                        <div className="btns">
                            <button className="edit-btn" onClick={goToEdit}>
                                Edit
                            </button>
                            <button className="delete-btn" onClick={() => deleteProduct(product.id)}>
                                Delete
                            </button>
                        </div>
                    ) : (null)
                ) : (null)
            }
        </>
    );
};

export default Card;