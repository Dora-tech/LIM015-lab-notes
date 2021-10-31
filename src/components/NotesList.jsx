import React from 'react';
import AddNote from './AddNote';
import Note from './Note';
//retorno {notes}
const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className='notes-list'>
            <AddNote handleAddNote={handleAddNote}/>
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
            
        </div>
    );
};

export default NotesList;
