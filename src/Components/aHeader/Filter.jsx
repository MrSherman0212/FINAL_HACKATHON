import React from 'react';
import { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';

const Filter = () => {
    const { mode, blockShadowStyle, filterToggle } = useContext(clientContext);

    return (
        <div className={`${mode ? "dark" : "light"} ${filterToggle ? 'dropDownOn' : 'dropDownOff'} filter`} style={blockShadowStyle}>
            <ul>

            </ul>
        </div>
    );
};

export default Filter;