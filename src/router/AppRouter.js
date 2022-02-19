import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Routes
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import {Vigilancia} from '../components/Vigilancia/Vigilancia'
// import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    // const dispatch = useDispatch();
    // const { checking, uid } = useSelector( state => state.auth);

    // useEffect(() => {
        
    //     dispatch( startChecking() );

    // }, [dispatch])

    // if ( checking ) {
    //     return (<h5>Espere...</h5>);
    // }

    return (
        <Router>
            <div>
                <Routes>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ true }
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ Vigilancia } 
                        isAuthenticated={ false }
                    />

                    <Link to="/" />   
                </Routes>
            </div>
        </Router>
    )
}
