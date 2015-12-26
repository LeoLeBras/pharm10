import React from 'react';
import { Route } from 'react-router';

export default (
    <Route path='' component={ require('Wrapper').default }>
        <Route name="Accueil" path='/' component={ require('HomepageView').default } />
        <Route name="Commandes" path='/orders' component={ require('OrdersView').default } />
        <Route name="Mon compte" path='/account' component={ require('AccountView').default } />
    </Route>
);
