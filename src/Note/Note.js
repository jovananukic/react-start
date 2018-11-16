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
        // this.randomBetween = this.randomBetween.bind(this)
    }

    // componentWillMount() {
    //     this.style = {
    //         right: this.randomBetween(0, window.innerWidth - 50, 'px'),
    //         top: this.randomBetween(0, window.innerHeight - 50, 'px'),
    //         transform: 'rotate(${this.randomBetween(-25, 25, 'deg')})'
    //     }
    // }

    // randomBetween(x, y, s) {
    //     return x + Math.ceil(Math.random()* (y-x)) +s
    // }

    componentDidUpdate() {
        var textArea
        if(this.state.editing) {
            textArea = this._newText
            textArea .focus()
            textArea.select()
        }
    }

    edit() {
        // alert('editing note')
        this.setState({
            editing:true
        })
    }
    remove() {
        // alert('removing note')
        this.props.onRemove(this.props.index)
    }
    save(e) {
        // alert(this._newText.value)
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing: false
        })
    }
    renderForm() {
        return(
            <div className='note' style={this.style}>
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input} defaultValue={this.props.children}/>
                    <button className='save'><FaRegSave /></button>
                </form>
            </div>
        )
    }
    renderDisplay() {
        return (
            <div className='note' style={this.style}>
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