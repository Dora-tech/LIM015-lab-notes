import React, { useState } from "react";
//aqui react-icons --> hay que instalar iconos.. npm install react-icons --save

import {MdDeleteForever, MdOutlineOpenInNew} from 'react-icons/md';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const Note = ({id, text, date, handleDeleteNote}) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdOutlineOpenInNew
                    onClick={() => setModalShow(true)}
                    className='edit-icon'
                    size='1.3em'
                />
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    mitext={text}
                />
                <MdDeleteForever 
                    onClick={()=>handleDeleteNote(id)} 
                    className='delete-icon' 
                    size='1.3em'
                />
               
            </div>
          
        </div >
    )
}

export default Note
