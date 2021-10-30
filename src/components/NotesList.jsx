import React from 'react';
import AddNote from './AddNote';
import Note from './Note';
//retorno {notes}
const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className='notes-list'>
            {notes?(
            notes.map((note)=>(
                    <Note 
                        id={note.id} 
                        text={note.text} 
                        date={note.date}
                        handleDeleteNote={handleDeleteNote}    
                    />
            ))
            ):null}
            <AddNote handleAddNote={handleAddNote}/>   
        </div>
    );
};

export default NotesList;
