import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import { bindActionCreators } from 'redux';

//crear nuevos productos
export function createNewProduct(producto) {
    return (dispatch) => {
        dispatch( agregarProducto() );
        try {
            dispatch( agregarProductoExito(producto) )
        } catch (error) {
            dispatch( agregarProductoError(true) )
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

const agregarProductoError = () => ({
    type : AGREGAR_PRODUCTO_ERROR,
    payload : true
});