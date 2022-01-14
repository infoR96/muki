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
      <h1 > INFORMACION TOMADA EN PUERTA </h1>

      <div className='row  bg-dark'>

        <div className='col-md-4 mt-5 p-5 mr-5'>
          <div className=''>
            <div className='col-4 '>
              <button type="button" onClick={cambioIngreso}
                className="btn btn-primary py-3 mt-1 botones">INGRESO DE CARGA</button>
            </div>
            <div className='col-md-4 ' >
              <button type="button" onClick={cambioSalida}
                className="btn btn-danger py-3 mt-1 botones">SALIDA DE CARGA</button>
            </div>
            <div className='col-md-4'>
              <button type="button" onClick={mostrarTotal}
                className="btn btn-warning py-3 mt-1 botones">CARGAS INGRESADAS</button>
            </div>
          </div>
        </div>


        <div className='col-sm-10 col-md-7 col-lg-5 d-flex flex-row  bg-primary p-4 my-3 mx-4'>
          {ingreso}

        </div>
      </div>
    </div>
  )
}
