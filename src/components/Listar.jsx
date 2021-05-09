import React,{useState,useEffect} from 'react'
import { EstudianteCard } from './EstudianteCard'
import {url} from './utilities/url'
export const Listar = () => {
    const [estudiantes, setEstudiantes] = useState([])
    const getEstudiantes= async()=>{
        const enviar=url+"list";
        const resp = await fetch(enviar);
        const  {estudiantes}  = await resp.json();
        setEstudiantes(estudiantes);
    }
    useEffect(() => {
        getEstudiantes();
    }, [])
    
    return (
        <div>
            {estudiantes.map(estudiante=>(
                <EstudianteCard key={estudiante._id} estudiante={estudiante}/>
            ))} 
        </div>
    )
}
