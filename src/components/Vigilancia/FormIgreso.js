import React from 'react'

export const FormIgreso = () => {
    return (
        <div className='Container'>
            <div>
        
                <div className='row '>
                    <div className='Form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='RUC/DNI'
                        />
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Tonelaje de Ingreso'
                        />
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Tonelaje de Ingreso'
                        />
                        <input
                            type='text'
                            className='form-control'
                            placeholder='TICKET'
                        />
                        <input
                            type='text'
                            className='form-control'
                            placeholder='NOMBRE DEL MINERO'
                        />
                    </div>
                    <div className="dropdown">
                    <button className="btn btn-secondary btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        SELECCIONE EMPRESA
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={()=>console.log('hola mundo')}>Action</a>
                        <a className="dropdown-item" >Another action</a>
                        <a className="dropdown-item" >Something else here</a>
                    </div>
                </div>

                </div>
            </div>

        </div>

    )
}
