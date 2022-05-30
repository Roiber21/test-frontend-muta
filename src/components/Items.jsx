import React,{useContext, useState} from 'react'
import '../styles/toolbar.css'
import AppContext from '../context/AppContext';
import '../styles/item.css'
import ModalDetails from '../containers/ModalDetails';

 const Items = () => {
    const { state } = useContext(AppContext);
    const[estadoModal, CambiarEstadoModal] =useState(false);
    const { buyer,items } = state;
   
    const handleModal=()=>{
        CambiarEstadoModal(false);
    }
    if (buyer.length === 0){
        return   <section className='items_vacios' >
        <p>Parece que aun no haz recogido algo.</p>
        <p className='p_item_vacio'>Puedes registrar una recolección haciendo click en el boton de arriba.</p>
    </section>
    }
    
    return (
        <> 
        <section >
           {
       items.map((item)=>{
           return <div>
            <div className='table_keys' >
                <input className='checkbox' type="checkbox" name="" id="" />
                <p className='table_p' >ID</p>
                <p className='table_p  ' >Fecha</p>
                <p className='table_p table_c'>cliente</p>
                <p className='table_p table_e ' >Estado</p>
                <p className='table_p table_m' >Materiales</p>
                <p className='table_p table_pt ' >Pago total</p>
            </div>
            <section onClick={() => CambiarEstadoModal(!estadoModal)} className='border_tag' >
            <div  className='tag_group' >
                <input className='checkbox' type="checkbox" name="" id="" />
                <p className='table_p tag_id ' >{item.id}</p>
                <p className='table_p tag_f ' >{item.fecha}</p>
                <p className='table_p tag_c'>{buyer[0].user}</p>
                <p className='table_p tag_e ' >{item.estado}</p>
                <p className='table_p tag_m' > <ul className='tags_material'>
                 <li className='tag_ACU tag' >{item.materiales.ACU} </li> 
                 <li className='tag_PET tag'  >{item.materiales.PET} </li>  
                 <li className='tag_Pasta tag'  >{item.materiales.Pasta} </li>  
                 <li className='tag_Trampa tag'  >{item.materiales.trampa} </li> </ul></p>
                <p className='table_p tag_pt ' >$  {item.pago}</p>
            </div>
            </section>
            <div className='line'></div>
           </div>
       })
       }
    </section>
    <ModalDetails
    estado={estadoModal}
    cambiarEstado={handleModal}
    >
        <div className='header' >
        <p className='modal_date'>{items[0].fecha}</p> 
        <p className='modal_ID'>C{items[0].id}</p> 
        </div>
        <div className='user_info'>
            <p className='user_title' >Usuario</p>
        <p className='user_names' >{buyer[0].user}</p>
        </div>
        <section className="collectables">
            <p className='collectables_title' >Material Recolectado</p>
            <div className='collectables_item' >
                <p className='collectables_item_title' >Aceite Cocina Usado</p>
                <p className='collectables_item_weight'  >{buyer[0].aceite} kg</p>
            </div>
            <div className='collectables_item' >
                <p className='collectables_item_title' >Trampa de grasa</p>
                <p className='collectables_item_weight'  >{buyer[0].trampa}  kg</p>
            </div>
            <div className='collectables_item' >
                <p className='collectables_item_title' >Pinpina Pasta</p>
                <p className='collectables_item_weight'  >{buyer[0].pasta} </p>
            </div>
            <div className='collectables_item' >
                <p className='collectables_item_title' >Pinpina PET</p>
                <p className='collectables_item_weight'  >{buyer[0].pet} </p>
            </div>
            <div className='payment_modal'>
            <p className="payment_title">Pago</p>
            <p className='pay_full' >$ {items[0].pago}</p>
            </div>
           
        </section>

      

    </ModalDetails>
    </>
    );
}

export default Items;