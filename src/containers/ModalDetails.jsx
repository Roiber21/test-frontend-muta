import React from 'react'
import '../styles/ModalDetails.css'

const ModalDetails = ({children, estado, cambiarEstado}) => {
    return (
        
       <>
       {estado && 
       <main onClick={cambiarEstado} className='overlay_details' >
        <section className='Contenedor_modal_details' >
        {children}
        </section>
       </main>
       }
       </>
    );
}

export default ModalDetails;