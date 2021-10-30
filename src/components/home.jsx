import React, { useState, useEffect } from "react";

import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import { Container, Button } from "react-bootstrap";

import Header from "../components/Header";
import NotesList from "../components/NotesList";
import {nanoid} from 'nanoid';
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({ correoUsuario }) => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Esta es nuestra primera nota! ¡Viva!',
      date: '15/11/2021',
    },
    {
      id: nanoid(),
      text: 'Esta es nuestra 2da nota! ¡Viva!!',
      date: '21/11/2021',
    },
    {
      id: nanoid(),
      text: 'Esta es nuestra 3era nota! ¡Viva!!',
      date: '28/11/2021',
    },
  ]);

  async function buscarDocumentOrCrearDocumento(idDocumento) {
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    // buscar documento
    const consulta = await getDoc(docuRef);
    // revisar si existe
    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      return infoDocu.notas;
    } else {
      // si no existe
      await setDoc(docuRef, { notas: [] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.notas;
    }
  }
  const addNote = (text)=> {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote=(id)=>{
    const newNotes = notes.filter((note)=> note.id !==id);
    setNotes(newNotes);
  }

  useEffect(() => {
    async function fetchNotas() {
      const notasFetchadas = await buscarDocumentOrCrearDocumento(
        correoUsuario
      );
      setNotes(notasFetchadas);
    }

    fetchNotas();
  }, []);

  return (
    <div >
     <Header/>
     <div className='container'>
       
          <NotesList 
          notes = {notes} 
          handleAddNote= {addNote}
          handleDeleteNote = {deleteNote}
        />
      


     </div>
   
    </div>
  );
};

export default Home;

