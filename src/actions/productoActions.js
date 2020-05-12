import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_EXITO,
    DESCARGA_PRODUCTO_ERROR,
    ELIMINAR_PRODUCTO,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR
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

            dispatch( agregarProductoError(null) )

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


//FUNCION QUE DESCARGA LOS PRODUCTOS DE LA BASE DE DATOS
export function mostrarProductoAction() {
    return async (dispatch) => {
        dispatch( descargarProductosAction() );

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( mostrarProductoExito(respuesta.data) );

        } catch (error) {
            dispatch( mostrarProductoError() )
        }
    }
}

const descargarProductosAction = () => ({
    type : COMENZAR_DESCARGA_PRODUCTO,
    payload : true
});

const mostrarProductoExito = productos => ({
    type : DESCARGA_PRODUCTO_EXITO,
    payload : productos
});

const mostrarProductoError = () => ({
    type : DESCARGA_PRODUCTO_ERROR,
    payload : true
});

//slecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch( eliminarProductosAction(id) );
        
        try {

            await clienteAxios.delete(`/productos/${id}`);
            dispatch( eliminarProductoExito() );

        } catch (error) {
            dispatch( eliminarProductoError() )
        }
    }
}
const eliminarProductosAction = id => ({
    type : ELIMINAR_PRODUCTO,
    payload : id
});

const eliminarProductoExito = () => ({
    type : ELIMINAR_PRODUCTO_EXITO
});

const eliminarProductoError = () => ({
    type : ELIMINAR_PRODUCTO_ERROR,
    payload : true
});


