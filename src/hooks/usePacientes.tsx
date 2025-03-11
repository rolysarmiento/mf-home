import React, { useEffect, useState } from 'react'

interface Atencion {
  pacienteid: number;
  nombres: string;
  apePaterno: string;
  apeMaterno: string;
  nacFecha: string;
  tipoDocumento: string;
  nroDocumento: string;
  codAtencion: string;
  fechaCita: string;
  horaLlegada: string;
  tipoAtencion: string;
  estadoAtencion: string;
}

const usePacientes = () => {

    const [atenciones, setAtenciones] = useState<Atencion[]>([]);

    useEffect(() => {
      const fetchAtenciones = async () => {
        try {
          const token = localStorage.getItem('token');
  
          if (!token) {
            throw new Error('No se encontró el token de autenticación');
          }
  
          const response = await fetch('http://localhost:10010/TestFrontEnd/listadoAtenciones', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, 
            },
          });
  
          if (!response.ok) {
            throw new Error('Error al obtener las atenciones');
          }
  
          const data = await response.json();
          setAtenciones(data); 
        } catch (error: any) {
          console.log(error.message); 
        } finally {
          console.log(false); 
        }
      };
  
      fetchAtenciones();
    }, []);

    return {atenciones}
}

export default usePacientes

