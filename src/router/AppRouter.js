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



export const AppRouter = () => {

    // const dispatch = useDispatch();
    //  const checking = useSelector(state => state.checking)



    return (
                <Vigilancia/> 
        // <BrowserRouter>

        //         <Routes>
                  
        //             <Route 
        //                 exact 
        //                 path="/login" 
        //                 element={<LoginScreen/>}
                      
        //             />
        //             <Route 
        //                 exact 
        //                 path="/*" 
                            
        //             />
                 
        //         </Routes>
          
        // </BrowserRouter>
    )
}
