import { useEffect, useState } from 'react';
import usePacientes from '../../hooks/usePacientes';
import './Pacientes.css'

const Pacientes = () => {

  const { atenciones } = usePacientes()

  return (
    <>
      <div className="container-pacientes">
        <h1>Mis Pacientes</h1>
        <p>Tu lista de pacientes agendados para el día de hoy</p>

        <div className="filters">
          <div className="search-container">
            <div className="search-box">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.6 0 7.5 7.5 0 0 0 10.6 0z"></path>
              </svg>
              <input type="text" placeholder="Buscar por DNI, Nombre, Apellido" />
            </div>
            <button className="search-button">
              <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.6 0 7.5 7.5 0 0 0 10.6 0z"></path>
              </svg>
            </button>
          </div>

        </div>

        <table>
          <thead>
            <tr>
              <th className='table-th'>TODAS LAS SEDES</th>
              <th>SEDE JESUS MARÍA</th>
              <th>SEDE CANACHO</th>
              <th>SEDE LA MOLINA</th>
            </tr>
          </thead>
        </table>

        <table>
          <thead>
            <tr>
              <th className='table-th'>Todos</th>
              <th>Reservados</th>
              <th>En espera</th>
              <th>En atención</th>
              <th>Atendidos</th>
              <th>No llegó</th>
            </tr>
          </thead>
        </table>

        <table>
          <thead>
            <tr>
              <th>Atención</th>
              <th>DNI / CE</th>
              <th>Nombres y Apellidos</th>
              <th>Edad</th>
              <th>Fecha cita</th>
              <th>Hora cita</th>
              <th>Hora de llegada</th>
              <th>Tipo de atención</th>
              <th>Estado</th>
              <th>Historial</th>
            </tr>
          </thead>
          <tbody>
            {atenciones.map((atencion: any) => (
              <tr key={atencion.nroDocumento}>
                <td>{atencion.codAtencion}</td>
                <td>{atencion.nroDocumento}</td>
                <td>{atencion.nombres}, {atencion.apePaterno} {atencion.apeMaterno}</td>
                <td>{atencion.nacFecha}</td>
                <td>{atencion.fechaCita}</td>
                <td>{atencion.horaLlegada}</td>
                <td>{atencion.horaLlegada}</td>
                <td>{atencion.tipoAtencion}</td>
                <td>{atencion.estadoAtencion}</td>
                <td>✅</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <p>Mostrando 10 pacientes de 20</p>
        </div>
      </div>
    </>
  )
}

export default Pacientes
