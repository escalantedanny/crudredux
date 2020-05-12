//IMPORTANDO LOS TYPES
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_EXITO,
    DESCARGA_PRODUCTO_ERROR
} from '../types';


// cada reducers tiene su propio state
const initialState = {
    productos : [],
    error : null,
    loading: false
}

export default function( state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO: 
        case COMENZAR_DESCARGA_PRODUCTO:
            return {
                ...state,
                loading : action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading : false,
                productos : [ ...state.productos, action.payload ]
            }
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTO_ERROR:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        case DESCARGA_PRODUCTO_EXITO:
            return {
                ...state,
                loading : false,
                error : null,
                productos : action.payload
            }
        default:
            return state;
    }
}