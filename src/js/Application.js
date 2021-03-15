import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { App } from './components/App';
import Routes from './Routes';

const Application = () => {
    return (
        <App>
            <React.Suspense fallback="Загрузка...">
                <Switch>
                    { Routes.map(( route ) => <Route {...route} key={route.path}/>) }
                </Switch>
            </React.Suspense>
        </App>
    );
};

export default Application;