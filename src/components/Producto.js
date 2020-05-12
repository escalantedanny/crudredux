import React from 'react';
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2'

//redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';

const Productos = ({producto}) => {

    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory();

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

    // funcion que redirige de forma programada
    const redireccionEdicion = producto => {
        history.push(`/productos/editar/${producto.id}`);
        dispatch( obtenerProductoEditar(producto) );
    }


    return ( 
    <tr>
        <td>{nombre}</td>
        <td><span className="font-weight-bold"> $ {precio}</span></td>
        <td className="acciones">
            <button 
                type="button" 
                className="btn btn-primary mr-2"
                onClick={ () => redireccionEdicion(producto) }    
            >
                Editar
            </button>
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