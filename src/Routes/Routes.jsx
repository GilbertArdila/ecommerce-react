import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../Containers';
import { Login} from '../PrivateRoutes';
import { CheckOut, CreateAccount, MyAccount, NewPassword, Orders, PasswordRecover, SendEmail } from '../Pages';
import { Home,NotFound } from '../Pages';
import {AppContext} from '../Context/AppContext';
import { UseInitialState } from '../Hooks';

const Routes = () => {
    //to use context
    const initialState=UseInitialState();
    return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
            <Layout>
                
                <Switch>

                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/login'} component={Login} />
                    <Route exact path={'/recovery-password'} component={PasswordRecover} />
                    <Route exact path={'/send-email'} component={SendEmail} />
                    <Route exact path={'/new-password'} component={NewPassword} />
                    <Route exact path={'/singup'} component={CreateAccount} />
                    <Route exact path={'/checkout'} component={CheckOut} />
                    <Route exact path={'/orders'} component={Orders} />
                    <Route exact path={'/account'} component={MyAccount} />
                    <Route path={'*'} component={NotFound} />

                </Switch>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export { Routes }