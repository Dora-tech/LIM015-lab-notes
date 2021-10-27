
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
function App() {

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

export default App;
