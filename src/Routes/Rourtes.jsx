import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from '../Components/aHeader/Header';
import Footer from '../Components/zFooter/Footer';

const Rourtes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>

            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Rourtes;