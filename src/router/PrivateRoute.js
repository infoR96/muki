import React from 'react';
import PropTypes from 'prop-types';

import {  Navigate, Routes } from 'react-router-dom';


export const PrivateRoute = ({Children,isAuthenticated}) => {



    return isAuthenticated 
                    ? ( <Navigate to="/login" /> )
                    : ( Children )
            }
        
       
 
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
