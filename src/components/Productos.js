import React, {Fragment, useEffect} from 'react';
import Producto from  '../components/Producto';

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
    }, []);

    const productos = useSelector( state => state.productos.productos );
    const error = useSelector( state => state.productos.error );
    const cargando = useSelector( state => state.productos.loading );
    
    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un Error</p> : null}
            { cargando ? <p>cargando... !</p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length  === 0 ? 'No hay roductos' : (
                        productos.map(producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    ) }
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;