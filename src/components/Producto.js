import React from 'react';
import { Link } from 'react-router-dom';

const Productos = ({producto}) => {

    const { nombre, precio, id } = producto;

    return ( 
    <tr>
        <td>{nombre}</td>
        <td><span className="font-weight-bold"> $ {precio}</span></td>
        <td className="acciones">
            <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2" >
                Editar
            </Link>
            <Link to={`/productos/eliminar/${id}`} className="btn btn-danger mr-2" >
                Eliminar
            </Link>
        </td>
    </tr>
     );
}
 
export default Productos;