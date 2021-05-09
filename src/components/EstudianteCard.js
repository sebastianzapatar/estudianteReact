import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
import {url} from './utilities/url';
import {Link} from 'react-router-dom';
export const EstudianteCard = ({estudiante}) => {
    console.log(estudiante)
    const [estado, setEstado] = useState(false);
    const eliminar=()=>{
        Swal.fire({
            title: 'Esta seguro?',
            text: "Tiene mas reversa una cagada",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!'
          }).then((result) => {
            if (result.isConfirmed) {
                const enviar=url+"delete/"+estudiante._id;
                fetch(enviar,{method:'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                }).then(resp=>{
                    Swal.fire(
                    'Se borro',
                    'Nada que hacer',
                    'success'
                    )
                    setEstado(true);
                })
              
            }
          })
    }
    if(estado){
        return <Redirect to="/listar"/>
    }
    return (
        <div>
            <h1>{estudiante.nombre} {estudiante.apellidos}</h1>
            <img src={url+"getimage/"+estudiante.image} 
            alt={estudiante._id} width="80px"></img>
            <button type="button" 
            className="btn btn-danger" 
            onClick={eliminar}>Eliminar</button>
            <Link to={"/editar/"+estudiante._id+"/nombre/"+estudiante.nombre+
            "/apellido/"+estudiante.apellidos} className="btn btn-primary">Editar</Link>
        </div>
    )
}
