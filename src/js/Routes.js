import React from 'react';

export default [
    {
        path: '/',
        component: React.lazy(() => import( './containers/Dashboard' )),
        exact: true
    }
];