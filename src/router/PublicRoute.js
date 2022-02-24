import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';


export const PublicRoute = ({Children,isAuthenticated}) => {



    return isAuthenticated 
                    ? ( <Navigate to="/" /> )
                    : ( Children )
            }
        
       
 
PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
