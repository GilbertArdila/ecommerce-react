import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Login,PasswordRecover } from '../PrivateRoutes';
import { Home,NotFound } from '../Pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                
                <Switch>

                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/login'} component={Login} />
                    <Route exact path={'/recovery-password'} component={PasswordRecover} />
                    <Route path={'*'} component={NotFound} />

                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export { Routes }