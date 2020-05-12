import React, { useState, useEffect } from 'react';

//actions de redux
import { useDispatch, useSelector } from 'react-redux';
import { comenzarEdicionProducto } from '../actions/productoActions'
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2'

const EditarProducto = () => {

    const history = useHistory();

    //nuevo  state de productos
    const [ producto, guardarProducto ] = useState({
        nombre : '',
        precio : ''
    })

    //useDispatch te crea una funcion
    const dispatch = useDispatch();

    const productoEditar = useSelector( state => state.productos.productoEditar );

    useEffect(() => {

        if(!productoEditar) return null;

        guardarProducto(productoEditar)

    },[productoEditar]);

    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    const { nombre, precio } = producto;

    const actualizarProducto = e => {
        e.preventDefault();
        Swal.fire(
            'Buen Trabajo!',
            'Producto Editado con Exito!',
            'success'
          )
        dispatch( comenzarEdicionProducto(producto) );
        history.push('/');
    }
    
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <form
                            onSubmit={ actualizarProducto }
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
}
 
export default EditarProducto;