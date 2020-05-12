import React from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2'

//redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productoActions';

const Productos = ({producto}) => {

    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();

    //confirmar si deea eliminar producto
    const confirmarEliminar = id => {
        
        Swal.fire({
            title: 'Esta seguro?',
            text: "luego no puede modificar los datos!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#78C2AD',
            cancelButtonColor: '#ff5a2b',
            confirmButtonText: 'Si, deseo Eliminar.'
          
          }).then((result) => {
              if (result.value) { 
                dispatch( borrarProductoAction(id) );
                }
          })
    }


    return ( 
    <tr>
        <td>{nombre}</td>
        <td><span className="font-weight-bold"> $ {precio}</span></td>
        <td className="acciones">
            <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2" >
                Editar
            </Link>
            <button 
                type="button"
                className="btn btn-danger"
                onClick={ () => confirmarEliminar(id)} >
                Eliminar
            </button>
        </td>
    </tr>
     );
}
 
export default Productos;