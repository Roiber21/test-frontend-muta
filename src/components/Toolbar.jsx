import React,{ useContext, useRef,useState } from 'react';
import Modal from '../containers/Modal';
import '../styles/toolbar.css'
import Items from './Items';
import AppContext from '../context/AppContext';

const Toolbar = () => {
  const { addToBuyer } = useContext(AppContext);
  const[click , setClick]=useState(false);
  const[estadoModal, CambiarEstadoModal] =useState(false);

  const form = useRef(null);
  
 const handleClick=()=>{
     setClick(true);
 }
 const handleModal=()=>{
    CambiarEstadoModal(false);
}

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
    
      aceite: formData.get('aceite'),
      user: formData.get('user'),
      pet: formData.get('pet'),
      pasta: formData.get('pasta'),
      trampa: formData.get('trampa'),
      
    };
    addToBuyer(buyer);
    handleModal()
  };
    
    return (
        <> 
        <main className="toolbar_container " >

        <div className='input_search_content' >
            <p className='titulo_search_input' >Buscar</p>
           {click? <input className='input_search' placeholder='Ingresa un ID' type="text"/> 
           : <input className='input_search' placeholder='Parametro de busqueda' type="text"/> }
            <svg className='icon_search' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33325 2.66683C4.75592 2.66683 2.66659 4.75617 2.66659 7.3335C2.66659 9.91083 4.75592 12.0002 7.33325 12.0002C9.91058 12.0002 11.9999 9.91083 11.9999 7.3335C11.9999 4.75617 9.91058 2.66683 7.33325 2.66683ZM1.33325 7.3335C1.33325 4.01979 4.01954 1.3335 7.33325 1.3335C10.647 1.3335 13.3333 4.01979 13.3333 7.3335C13.3333 10.6472 10.647 13.3335 7.33325 13.3335C4.01954 13.3335 1.33325 10.6472 1.33325 7.3335Z" fill="#757575"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6286 10.6284C10.889 10.368 11.3111 10.368 11.5714 10.6284L14.4714 13.5284C14.7318 13.7887 14.7318 14.2108 14.4714 14.4712C14.2111 14.7315 13.789 14.7315 13.5286 14.4712L10.6286 11.5712C10.3683 11.3108 10.3683 10.8887 10.6286 10.6284Z" fill="#757575"/>
</svg>
<div className='filtrar'>
    <p className='titulo_search' >Filtrar</p>
    <svg className='icon_busqueda' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.0929 2.57912C1.25675 2.22596 1.61069 2 2.00001 2H22C22.3893 2 22.7433 2.22596 22.9071 2.57912C23.071 2.93229 23.015 3.34845 22.7636 3.64573L15 12.8261V21C15 21.3466 14.8206 21.6684 14.5257 21.8507C14.2309 22.0329 13.8628 22.0494 13.5528 21.8944L9.5528 19.8944C9.21402 19.725 9.00001 19.3788 9.00001 19V12.8261L1.23644 3.64573C0.985046 3.34845 0.929037 2.93229 1.0929 2.57912ZM4.15532 4L10.7636 11.8143C10.9162 11.9948 11 12.2236 11 12.46V18.382L13 19.382V12.46C13 12.2236 13.0838 11.9948 13.2364 11.8143L19.8447 4H4.15532Z" fill="#1A1A1A"/>
</svg>

</div>
<div className='organizar'>
    <p className='titulo_sort' >Organizar</p>
    <svg  className='icon_sort' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V10C11 10.5523 10.5523 11 10 11H3C2.44772 11 2 10.5523 2 10V3ZM4 4V9H9V4H4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3ZM15 4V9H20V4H15Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 13.4477 2.44772 13 3 13H10C10.5523 13 11 13.4477 11 14V21C11 21.5523 10.5523 22 10 22H3C2.44772 22 2 21.5523 2 21V14ZM4 15V20H9V15H4Z" fill="black"/>
</svg>

</div>
<button onClick={() => CambiarEstadoModal(!estadoModal)} className='button_toolbar' >
    NUEVA ENTRADA <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 1.99984C4.68637 1.99984 2.00008 4.68613 2.00008 7.99984C2.00008 11.3135 4.68637 13.9998 8.00008 13.9998C11.3138 13.9998 14.0001 11.3135 14.0001 7.99984C14.0001 4.68613 11.3138 1.99984 8.00008 1.99984ZM0.666748 7.99984C0.666748 3.94975 3.94999 0.666504 8.00008 0.666504C12.0502 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0502 15.3332 8.00008 15.3332C3.94999 15.3332 0.666748 12.0499 0.666748 7.99984Z" fill="#F1F7F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99992 4.6665C8.36811 4.6665 8.66659 4.96498 8.66659 5.33317V10.6665C8.66659 11.0347 8.36811 11.3332 7.99992 11.3332C7.63173 11.3332 7.33325 11.0347 7.33325 10.6665V5.33317C7.33325 4.96498 7.63173 4.6665 7.99992 4.6665Z" fill="#F1F7F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66675 8.00016C4.66675 7.63197 4.96522 7.3335 5.33341 7.3335H10.6667C11.0349 7.3335 11.3334 7.63197 11.3334 8.00016C11.3334 8.36835 11.0349 8.66683 10.6667 8.66683H5.33341C4.96522 8.66683 4.66675 8.36835 4.66675 8.00016Z" fill="#F1F7F9"/>
</svg>

</button>
        </div>

        </main>
        <Items/>
        <Modal estado={estadoModal}
        cambiarEstado={CambiarEstadoModal}>
    <h1 className='titulo_modal' >Nueva entrada</h1>
    <form className='form' ref={form}>
      
        <label className='select_label' htmlFor="user"> 
        cliente
             <select  className='select' name="user" id="user">
                 <option selected disabled >Selecciona un cliente...</option>
                 <option value="Simon Parrilla Sur">Simon Parrilla Sur</option>
              
             </select>
             </label>

         <div className='form_reco' > 
               <p className='form_title' >Recoleccion</p>
               <label className='recoleccion_inputs' htmlFor="name">
               Aceite Cocina Usado
            <input placeholder='                0' className='input_form' type="text"
            name='aceite'
            id="aceite"
      
            />
        </label>
        <label className='recoleccion_inputs' htmlFor="name">
            Trampa de grasa
            <input placeholder='                0' className='input_form' type="text"
            name='trampa'
            id="trampa"
      
            />
        </label>

        <label  className='recoleccion_inputs'htmlFor="name">
        Pinpina de pasta
            <input placeholder='                0' className='input_form' type="text"
            name='pasta'
            id="pasta"
      
            />
        </label>
      
        <label className='recoleccion_inputs' htmlFor="name">
        Pinpina PET
            <input  onClick={handleClick} placeholder='                0' className='input_form' type="text"
            name='pet'
            id="pet"
      
            />
        </label>
        </div>
      
          <div className='payment'>
              <p className='payment_p' >pago</p>
            {click? <p className='payment_total' >$68,522</p> :  <p className='payment_total0' >$0</p>}
          </div>
            
    
        
        
         
            </form>
            <button  className='button_send' onClick={handleSubmit} type="button">
                 CREAR
              </button>
            
        </Modal>
        </>
        
    );
}

export default Toolbar;