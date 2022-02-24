import React, { useEffect } from 'react';
import {
    BrowserRouter ,
    Navigate,
    Routes,
    Route
  } from 'react-router-dom';
  
 import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import {Vigilancia} from '../components/Vigilancia/Vigilancia'
// import { startChecking } from '../actions/auth';
 import { PublicRoute } from './PublicRoute';
 import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    // const dispatch = useDispatch();
     const { checking, uid } = useSelector( state => state.auth);

    // useEffect(() => {
        
    //     dispatch( startChecking() );

    // }, [dispatch])

    // if ( checking ) {
    //     return (<h5>Espere...</h5>);
    // }

    return (
        <BrowserRouter>

                <Routes>
                  
                    <Route 
                        exact 
                        path="/login" 
                        element={<PublicRoute isAuthenticated={ checking } >
                                <LoginScreen/> 
                            </PublicRoute>}
                    />
                    <Route 
                        exact 
                        path="/*" 
                        element={<PrivateRoute isAuthenticated={ checking } >
                                <Vigilancia/> 
                            </PrivateRoute>}
                    />
                 
                </Routes>
          
        </BrowserRouter>
    )
}
