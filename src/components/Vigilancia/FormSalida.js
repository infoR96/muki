import React from 'react'

export const FormSalida = () => {
    return (
        <div className='d-flex flex-row  bg-light p-4 my-3 ml-4 formingreso '>
            <div className='Container '>

                <div className='row container-fluid '>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Ticket</th>
                                <th scope="col">Tonelaje</th>
                                <th scope="col">Estado </th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}
