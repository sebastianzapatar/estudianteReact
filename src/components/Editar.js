import React,{useState} from 'react';
import {useLocation} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Redirect} from 'react-router-dom';
import {useForm} from './Hooks/useForm';
import {url} from './utilities/url';
export const Editar = () => {
    
    const [estado, setEstado] = useState(false);
    const location=useLocation();
    const {pathname}=location;
    const datos=pathname.split("/");
    const id=datos[2];
    
    const nombrees=datos[4];
    const apellidoes=datos[6];
    const [form,handleInputChange]=useForm({
        nombre:nombrees,
        apellido:apellidoes,
    });
    const guardar=(e)=>{
        e.preventDefault();
        
        const enviar=url+"edit/"+id;
        console.log(enviar);
        fetch(enviar,{method:'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(
                {"nombre":nombre,"apellido":apellido}
            )
        })
        .then(resp=>{
            Swal.fire(
                'Se inserto el estudiante',
                nombre+" "+apellido,
                'success'
            )
            setEstado(true);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const {nombre,apellido}=form;
    if(estado){
        return <Redirect to="/listar"/>
    }
    return (
        <div>
            <h5>{nombre} {apellido}</h5>
            <form onSubmit={guardar}>
          <div className="mb-3">

            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" 
            id="nombre" 
            name="nombre"
            onChange={handleInputChange}
            placeholder="nombre estudiante"
            required
            value={nombre}
            />
          </div>
          <div className="mb-3">

            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" 
            id="apellido" 
            name="apellido"
            onChange={handleInputChange}
            placeholder="apellido estudiante"
            required
            value={apellido}
            />
             <button type="submit" className="btn btn-primary" >Editar</button>
          </div>
        </form>
        </div>
    )
}
