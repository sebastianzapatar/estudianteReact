import React,{useState} from 'react';
import Swal from 'sweetalert2';
import {Redirect} from 'react-router-dom';
import {useForm} from './Hooks/useForm';
import {url} from './utilities/url';
import Axios from 'axios';
export const Agregar = () => {
    const [form,handleInputChange]=useForm({
        nombre:"",
        apellido:"",
        
    });
    const [file, setfile] = useState({});
    const handleInputChangefile=(e)=>{
        setfile(e.target.files[0]);
        

    }
    const [estado, setEstado] = useState(false);
    const guardar=(e)=>{
        e.preventDefault();
        console.log(nombre,apellido);
        const enviar=url+"save";
        console.log(enviar);
        
        fetch(enviar,{method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(
                {"nombre":nombre,"apellido":apellido}
            )
        })
        .then(resp=>{
            console.log(resp);
            resp.json().then(mensaje=>{
                const id=mensaje.estudiante._id;
                const formdata=new FormData();
                formdata.append('file0',file,
                    file.name);
                console.log(file.name);  
                const urlimagen=url+'upload-image/'+id;
                Axios.post(urlimagen,formdata).then(rep=>{
                    console.log(rep);
                    setEstado(true);
                })
            })
            Swal.fire(
                'Se inserto el estudiante',
                nombre+" "+apellido,
                'success'
            )
            
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
            
            <input type="file" className="form-control" 
            id="file" 
            name="file0"
            onChange={handleInputChangefile}
            placeholder="foto estudiante"
            required
            />
             <button type="submit" className="btn btn-primary" >Guardar</button>
          </div>
        </form>
        </div>
    )
}
