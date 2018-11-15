import React from 'react';
import './Note.css';
import {FaPencilAlt} from '../../node_modules/react-icons/fa';
import {FaTrash} from '../../node_modules/react-icons/fa';
import {FaRegSave} from '../../node_modules/react-icons/fa';



class note extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            editing:false
        }
        this.edit=this.edit.bind(this)
        this.remove=this.remove.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }
    edit() {
        // alert('editing note')
        this.setState({
            editing:true
        })
    }
    remove() {
        alert('removing note')
    }
    save() {
        alert(this._newText.value)
    }
    renderForm() {
        return(
            <div className='note'>
                <form>
                    <textarea ref={input => this._newText = input}/>
                    <button onClick={this.save} className='save'><FaRegSave /></button>
                </form>
            </div>
        )
    }
    renderDisplay() {
        return (
            <div className='note'>
                <p>{this.props.children}</p>
                <button onClick={this.edit} id='edit'><FaPencilAlt/></button>
                <button onClick={this.remove} id='remove'><FaTrash/></button>
            </div>
        )
    }
    render() {
        // if(this.state.editing) {
        //     return this.renderForm()
        // } else {
        //     return this.renderDisplay()
        // }    below is written an inline if/else statement
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }

};
export default note;