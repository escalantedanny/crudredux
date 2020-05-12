import React, {Fragment, useEffect} from 'react';

//actions de redux
import { useDispatch, useSelector } from 'react-redux';
import { mostrarProductoAction } from '../actions/productoActions';

const Productos = () => {

    //useDispatch te crea una funcion
    const dispatch = useDispatch();

    useEffect(()=> {

        //mandar a llamar el action de producto action
        const llamarProductos = () => dispatch( mostrarProductoAction() ); 
        llamarProductos();
    }, );

    //const productos = useSelector( state => state.productos. );

   // console.log(productos);
    
    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;