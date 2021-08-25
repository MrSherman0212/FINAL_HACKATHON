import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../Contexts/ClientContext';

const Filter = () => {
    const { mode, blockShadowStyle, filterToggle, getProducts, filterDropDown } = useContext(clientContext);
    const history = useHistory()

    function fetchProducts(params, value) {
        let search = new URLSearchParams(history.location.search)
        search.set(params, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProducts(history)
        console.log(value);
    }

    function reset() {
        history.push("/")
        getProducts(history)
        filterDropDown()
    }

    function genreSet(e) {
        fetchProducts("category", e.target.value)
        filterDropDown()
    }

    return (
        <div className={`${mode ? "dark" : "light"} ${filterToggle ? 'dropDownOn' : 'dropDownOff'} filter`} style={blockShadowStyle}>
            <ul>
                <button onClick={reset}>Reset</button>
                <button value="детектив" onClick={genreSet}>детектив</button>
                <button value="фантастика" onClick={genreSet}>фантастика</button>
                <button value="приключения" onClick={genreSet}>приключения</button>
                <button value="роман" onClick={genreSet}>роман</button>
                <button value="научная книга" onClick={genreSet}>научная книга</button>
                <button value="фольклор" onClick={genreSet}>фольклор</button>
                <button value="юмор" onClick={genreSet}>юмор</button>
                <button value="справочная книга" onClick={genreSet}>справочная книга</button>
                <button value="поэзия проза" onClick={genreSet}>поэзия проза</button>
                <button value="детская книга" onClick={genreSet}>детская книга</button>
                <button value="литература" onClick={genreSet}>литература</button>
                <button value="учебная книга" onClick={genreSet}>учебная книга</button>
                <button value="книги о психологии" onClick={genreSet}>книги о психологии</button>
                <button value="хобби досуг" onClick={genreSet}>хобби досуг</button>
                <button value="техника" onClick={genreSet}>техника</button>
            </ul>
        </div>
    );
};

export default Filter;