import React from 'react';
import './Board.css';
import Note from '../Note/Note';
import {FaPlusCircle} from '../../node_modules/react-icons/fa';

class board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
        this.add = this.add.bind(this)
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
        this.remove =this.remove.bind(this)
        this.nextId = this.nextId.bind(this)
    }

    componentWillMount() {
        var self = this
        if(this.props.count) {
            fetch('https://baconipsum.com/api/?type=all-meat$sentences=${this.props.count}')
                .then(response => response.json())
                .then(json => json[0].split('.').forEach(sentence => self.add(sentence.substring(0, 25))))
        }
    }


    // method
    add(text) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
        }))
    }

    nextId() {
        this.uniqeId = this.uniqeId || 0
        return this.uniqeId++
    }

    update(newText, i) {
        console.log('updating', i, newText);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !==i) ? note : {...note, note:newText}
            )
        }))
    }

    remove(id) {
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }

    eachNote(note, i) {
        return (
            <Note key={note.id}
                  index={note.id}
                  onChange={this.update}
                  onRemove={this.remove}>
                {note.note}</Note>
        )
    }
    render() {
        return (
                <div className='board'>
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.add.bind(null, "New Note")} id='add'>< FaPlusCircle /></button>
                </div>
        )
    }


};
export default board;