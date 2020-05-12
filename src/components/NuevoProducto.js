import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions de redux
import { createNewProduct } from '../actions/productoActions';
import { mostrarAlerta, ocultarAlerta } from '../actions/alertaActions';

// history es el acceso a todas las varialbles de router para direccionar
const NuevoProducto = ({history}) => {

    //useDispatch te crea una funcion
    const dispatch = useDispatch();

    //acceder al state del store
    const error = useSelector( state => state.productos.error );
    const alerta = useSelector( state => state.alerta.alerta );
    
    

    const [nombre, guardarNombre ] = useState('');
    const [precio, guardarPrecio ] = useState(0);

    //mandar a llamar el action de producto action
    const addNewProduct = producto => dispatch( createNewProduct(producto) ); 

    const submitNewProduct = e => {
        e.preventDefault();

        //validar
        if(nombre.trim() === '' || precio <= 0) {
            const respuesta = {
                msg : 'ambos campos son obligatorios',
                classes : 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(mostrarAlerta(respuesta) );
            return;
        }
        dispatch(ocultarAlerta(null) );
        //enviar producto
        addNewProduct({
            nombre,
            precio
        })

        history.push('/');

    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        { alerta ? <p className={alerta.classes} >{alerta.msg}</p> : null  }
                        <form
                            onSubmit={ submitNewProduct }
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name={nombre}
                                    onChange={ e => guardarNombre(e.target.value)}
                                    placeholder="Computadora"
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    name={precio}
                                    onChange={ e => guardarPrecio( Number(e.target.value) )}
                                    placeholder="23000"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        { error ? <p className="alert alert-danger p2 mt-4 text-center" >Hubo un error</p> : null  }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;