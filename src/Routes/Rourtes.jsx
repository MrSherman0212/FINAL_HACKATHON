import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from '../Components/aHeader/Header';
import Home from '../Components/bContent/Home';
import Footer from '../Components/zFooter/Footer';
import ClientContextProvider from '../Contexts/ClientContext';

const Routes = () => {
    return (
        <ClientContextProvider>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Home />
                </Switch>
                <Footer />
            </BrowserRouter>
        </ClientContextProvider>
    );
};

export default Routes;