import React, { useState } from 'react'
import { FormIgreso } from './FormIgreso'
import { FormSalida } from './FormSalida'
import { CantidadCargas } from './CantidadCargas'

export const Vigilancia = () => {

  const [ingreso, setingreso] = useState(FormIgreso)

  const cambioIngreso = () => {
    setingreso(FormIgreso);
  }

  const cambioSalida = () => {
    setingreso(FormSalida);
  }


  const mostrarTotal = () => {
    setingreso(CantidadCargas);
  }

  return (
    <div className='container '>
      <div className='bg-light row'>
        <div className='col-sm-'>
          <img src='./assets/img/logo.jpg' />
        </div>
        <div className='col-sm-8'>
          <h1 className=' mt-3 titulo'>Control de cargas</h1>
        </div>
      </div>
      <div className='row bg-dark my-5' >
        <div className='col-md-4 mt-5 p-5 ml-4 '>
          <button type="button" onClick={cambioIngreso}
            className="btn btn-primary py-3 mt-3 botones">INGRESO DE CARGA</button>
          <button type="button" onClick={cambioSalida}
            className="btn btn-danger py-3 mt-3 botones">SALIDA DE CARGA</button>
        </div>
          {ingreso}
      </div>
    </div>
  )
}
