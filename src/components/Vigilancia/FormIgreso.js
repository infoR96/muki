import React from 'react'

export const FormIgreso = () => {
    return (
        <div className='Container'>
            <div>
                <div className='row container-fluid '>
                    <div className='Form-group col-12'>
                        <input
                            type='text'
                            className='form-control p-3 my-2'
                            placeholder='RUC/DNI'
                        />
                        <input
                            type='text'
                            className='form-control p-3  my-2'
                            placeholder='NOMBRE'
                        />
                        <input
                            type='text'
                            className='form-control p-3  my-2'
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
                            className='form-control p-3 my-2'
                            placeholder='Tonelaje de Ingreso'
                        />
                        <input
                            type='text'
                            className='form-control p-3 my-2'
                            placeholder='NUMERO DE TICKET'
                        />
                           <input
                            type='text'
                            className='form-control p-3  my-2'
                            placeholder='ACOPIADOR'
                        />
                    </div>
                </div>
            </div>

        </div>

    )
}
