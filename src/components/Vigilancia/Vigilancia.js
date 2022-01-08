import React, { useState } from 'react'
import { FormIgreso } from './FormIgreso'
import { FormSalida } from './FormSalida'
import { CantidadCargas } from './CantidadCargas'

export const Vigilancia = () => {

  const [ingreso, setingreso] = useState(FormIgreso)

  const cambioIngreso = ()=>{
    setingreso(FormIgreso);
  }

  const cambioSalida = ()=>{
    setingreso(FormSalida);
  }


  const mostrarTotal = ()=>{
    setingreso(CantidadCargas);
  }
  
  return (
    <div className='container '>
      <h1 className='offset-2'> INFORMACION TOMADA EN PUERTA </h1>

      <div className='row container-fluid bg-dark'>

        <div className='col-3 my-5'>
          <div className='col-12 '>
            <button type="button" onClick={cambioIngreso} className="btn btn-primary p-3 m-3">INGRESO DE CARGA</button>
          </div>
          <div className='col-12 '>
            <button type="button" onClick={cambioSalida} className="btn btn-warning p-3 m-3">SALIDA DE CARGA</button>
          </div>
          <div className='col-12 '>
            <button type="button" onClick={mostrarTotal} className="btn btn-warning p-3 m-3">CARGAS INGRESADAS</button>
          </div>
        </div>


        <div className='col-6 d-flex flex-row my-5 bg-success p-4'>
          {ingreso}

        </div>
      </div>
    </div>
  )
}
