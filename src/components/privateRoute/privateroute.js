import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';

const userInfo = localStorage.getItem('user_info');
const PrivateRoute = ({ element: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                <Navigate replace to="/login" />
            )
        }
    />
);


export default PrivateRoute;
