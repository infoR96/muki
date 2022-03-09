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
import { startChecking } from '../actions/auth';
 import { PublicRoute } from './PublicRoute';
 import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    // const dispatch = useDispatch();
     const checking = useSelector(state => state.checking)
     console.log('hola mundo',checking)

    useEffect(() => {
        

    }, [])


    return (
        <BrowserRouter>

                <Routes>
                  
                    <PublicRoute 
                        exact 
                        path="/login" 
                        element={<LoginScreen/>} isAuthenticated={ checking }/>
                    <PrivateRoute
                        exact 
                        path="/*" 
                        element={<Vigilancia/>} isAuthenticated={ checking } 
                            />
                 
                </Routes>
          
        </BrowserRouter>
    )
}
