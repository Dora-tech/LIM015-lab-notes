import React, { useState }  from 'react'
import { Modal,Button } from "react-bootstrap"; 
const MyVerticallyCenteredModal = (props) => {
  const [Editar, setEditar] = useState(false);
  const [noteText, setNoteText]= useState(props.mitext);
  //setNoteText(props.mitext)
  const handleChange = (event) =>{
    // console.log(event.target.value)
        setNoteText(event.target.value);   
    
};
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        {Editar
            ? (<input 
              rows='8'
              cols='10'
              placeholder='Escribe para agregar una nota..'
              value={noteText}  
              onChange={handleChange}            
          ></input>)
            : (<p>
              {noteText}
            </p>)} 

      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={() => setEditar(!Editar)}>{Editar
            ? "Guardar"
            : "Editar"}          
          </Button>
        <Button onClick={props.onHide}>Ver mis notas</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default MyVerticallyCenteredModal
