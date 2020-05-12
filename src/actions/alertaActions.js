import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

//muestra una alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch( mostrarAlertaError(alerta) )
    }
}

const mostrarAlertaError = alerta => ({
    type : MOSTRAR_ALERTA,
    payload: alerta
})

//muestra una alerta
export function ocultarAlerta(alerta) {
    return (dispatch) => {
        dispatch( ocultarAlertaError(alerta) )
    }
}

const ocultarAlertaError = alerta => ({
    type : OCULTAR_ALERTA,
    payload: alerta
})