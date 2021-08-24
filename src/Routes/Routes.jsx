import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ForgotPassword from '../Components/aAuth/ForgotPassword';
import Login from '../Components/aAuth/Login';
import SignUp from '../Components/aAuth/SignUp';
import UpdateProfile from '../Components/aAuth/UpdatePassword';
import List from '../Components/bContent/List';
import AuthContextProvider from '../Contexts/AuthContext';
import ClientContextProvider from '../Contexts/ClientContext';

const Routes = () => {
    return (
        <AuthContextProvider>
            <ClientContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={List} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/update-password" component={UpdateProfile} />
                    </Switch>
                </BrowserRouter>
            </ClientContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;