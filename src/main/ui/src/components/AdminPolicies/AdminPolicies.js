import { useState } from 'react';
import './AdminPolicies.scss';
// import React, { useState} from 'react';

const AdminPolicies = () => {
    const [normas, setNormas] = useState("");
    const [saludSeguridad, setSaludSeguridad] = useState(""); 
    const [cancelacion, setCancelacion] = useState("");

    return(
        <div className="admin-policies">
            <h2>Políticas del producto</h2>
            <div class="policies">
                <div>
                    <h3>Normas de la casa</h3>
                    <p>Descripción</p>
                    <textarea placeholder='Escriba aquí' onChange={e => { setNormas((e.target.value).replace(/(\r\n|\n|\r)/gm, ";"))}}></textarea>
                </div>
                <div>
                    <h3>Salud y seguridad</h3>
                    <p>Descripción</p>
                    <textarea placeholder='Escriba aquí' onChange={e => setSaludSeguridad((e.target.value).replace(/(\r\n|\n|\r)/gm, ";"))}></textarea>
                </div>
                <div>
                    <h3>Política de cancelación</h3>
                    <p>Descripción</p>
                    <textarea placeholder='Escriba aquí' onChange={e => setCancelacion((e.target.value).replace(/(\r\n|\n|\r)/gm, ";"))}></textarea>
                </div>
            </div>
        </div>
    )
}

export default AdminPolicies;