import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

import { bindActionCreators } from 'redux';

import Swal from 'sweetalert2'

//crear nuevos productos
export function createNewProduct(producto) {

    
    return  async (dispatch) => {
        dispatch( agregarProducto() );
        try {
            
            await clienteAxios.post('/productos', producto);
            
            dispatch( agregarProductoExito(producto) );
            
            Swal.fire({
                title: 'Correcto!',
                text: 'Se ingreso con exito el producto',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })

        } catch (error) {
            dispatch( agregarProductoError(true) )

            Swal.fire({
                title: 'Error!',
                text: 'Se a producido un Éxito',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        }
    }
}

const agregarProducto = () => ({
    type : AGREGAR_PRODUCTO,
    payload : true
})

const agregarProductoExito = producto => ({
    type : AGREGAR_PRODUCTO_EXITO,
    payload : producto
});

const agregarProductoError = estado => ({
    type : AGREGAR_PRODUCTO_ERROR,
    payload : estado
});