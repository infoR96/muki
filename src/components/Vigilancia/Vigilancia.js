import React, { useState } from 'react'
import { FormIgreso } from './FormIgreso'

export const Vigilancia = () => {

  const [ingreso, setingreso] = useState(FormIgreso)
  return (
    <div className='container '>
      <h1 className='offset-2'> INFORMACION TOMADA EN PUERTA </h1>

      <div className='row container-fluid bg-primary'>
        <div className='col-3'>
          <div className='col-12 bg-primary'>

            <button type="button" className="btn btn-success p-3 m-3">INGRESO DE CARGA</button>

          </div>
          <div className='col-12 '>
            <button type="button" className="btn btn-warning p-3 m-3">INGRESO DE CARGA</button>
          </div>
          <div className='col-12 '>
            <button type="button" className="btn btn-warning p-3 m-3">CARGAS INGRESADAS</button>
          </div>
        </div>
        <div className='col-6 d-flex flex-row my-5 '>
          {ingreso}

        </div>
      </div>
    </div>
  )
}
