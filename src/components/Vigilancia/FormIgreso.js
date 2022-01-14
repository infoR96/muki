import React from 'react'
import moment from 'moment';


export const FormIgreso = () => {

   const now= moment().format('DD/MM/YYYY HH:mm');
    return (
        <div className='d-flex flex-row  bg-primary p-4 my-3 ml-4 formingreso '>
        <div className='Container '>
            <div>
                <div className='row container-fluid '>
                    <div className='Form-group col-12'>
                        <input
                            type='text'
                            className='form-control p-3 my-2 inputs'
                            placeholder='RUC/DNI'
                        />
                        <input
                            type='text'
                            className='form-control p-3  my-2 inputs'
                            placeholder='NOMBRE'
                        />
                        <input
                            type='text'
                            className='form-control p-3  my-2 inputs'
                            placeholder='NUMERO DE CONTACTO'
                        />
                        <div className="dropdown mx-5 offset-2 col-10">
                            <button className="btn btn-warning btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                EMPRESA ASOCIADA
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item" onClick={() => console.log('hola mundo')}>ARZAC CONSULTING SAC</button>
                                <button className="dropdown-item" href='#'> MINING LOS LAURELES EIRL	</button>
                                <button className="dropdown-item" >MINERA PICAPIEDRA 1313 EIRL</button>
                                <button className="dropdown-item" >CONSORCIO HUERTA MINING EIRL</button>
                            </div>
                        </div>
                        <input
                            type='text'
                            className='form-control p-3 my-2 inputs'
                            placeholder='Tonelaje de Ingreso'
                        />
                        <input
                            type='text'
                            className='form-control p-3 my-2 inputs'
                            placeholder='NUMERO DE TICKET'
                        />
                           <input
                            type='text'
                            className='form-control p-3  my-2 inputs'
                            placeholder='ACOPIADOR'
                        />

                        <h4>Ingreso: {now}</h4>
                        <button className='btn btn-success py-3 mt-3 ' type='submit'>
                        CARGA INGRESADA
                    </button>
                    </div>
                   
                </div>
            </div>

        </div>
        </div>

    )
}
