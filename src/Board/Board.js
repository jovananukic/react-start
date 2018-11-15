import React from 'react';
import './Board.css';
import Note from '../Note/Note';

class board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: 33,
                    note: 'Call Lisa'
                },
                {
                    id: 44,
                    note: 'Email John'
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
    }

    eachNote(note, i) {
        return (
            <Note key={i} index={i}>{note.note}</Note>
        )
    }
    render() {
        return (
                <div className='board'>
                {this.state.notes.map(this.eachNote)}
                </div>
        )
    }


};
export default board;