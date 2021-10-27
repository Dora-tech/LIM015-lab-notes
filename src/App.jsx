
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/11/2021',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '21/11/2021',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '28/11/2021',
    },
  ]);
  return (
    <div >
     <Header/>
     <div className='container'>
      <NotesList notes= {notes}/>
     </div>
   
    </div>
  );
}

export default App;
