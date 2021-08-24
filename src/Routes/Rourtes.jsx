import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ForgotPassword from '../Components/aAuth/ForgotPassword';
import Login from '../Components/aAuth/Login';
import SignUp from '../Components/aAuth/SignUp';
import UpdateProfile from '../Components/aAuth/UpdatePassword';
import Header from '../Components/aHeader/Header';
import List from '../Components/bContent/List';
import Add from '../Components/CRUD/Add';
import Footer from '../Components/zFooter/Footer';
import AuthContextProvider from '../Contexts/AuthContext';
import ClientContextProvider from '../Contexts/ClientContext';

const Routes = () => {
    return (
        <AuthContextProvider>
            <ClientContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={List} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/update-password" component={UpdateProfile} />
                        <Route exact path="/add" component={Add} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </ClientContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;