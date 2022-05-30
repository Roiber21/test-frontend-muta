import React from 'react'
import '../styles/Modal.css'

const Modal = ({children, estado, cambiarEstado}) => {
    return (
        
       <>
       {estado && 
       <main  className='overlay' >
        <section className='Contenedor_modal' >
        {children}
        </section>
       </main>
       }
       </>
    );
}

export default Modal;