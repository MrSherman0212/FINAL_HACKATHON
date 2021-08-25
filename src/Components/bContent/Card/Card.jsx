import React, { useContext } from 'react';
import { clientContext } from '../../../Contexts/ClientContext';

const Card = ({ x, y }, { products }) => {
    const { mode, shadow } = useContext(clientContext)
    console.log(products);

    const blockClass = {
        boxShadow: `${mode ? 0 : (-x / 100)}px ${(-y / 100)}px 20px 0px ${shadow}`
    }
    return (
        <div className="card" style={blockClass}>

        </div>
    );
};

export default Card;