import React from 'react'

const AddNote = () => {
    return (
        <div className='note new'>
            <texttarea 
                rows='8'
                cols='10'
                placeholder='Escribe para agregar una nota..'
            ></texttarea>
            <div className='note-footer'>
                <small> 200 Remaining </small>
                <button className='save'>Save</button>
            </div>
        </div>
    );
};

export default AddNote;
