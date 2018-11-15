import React from 'react';

class checklist extends React.Component {
    constructor (props) {
       super(props)
       this.state = {
           checked: false
       }
       this.handleCheck= this.handleCheck.bind(this)
    }
    handleCheck() {
        this.setState({
            checked: !this.state.checked
        })
    }
    render() {
        var msg
            if(this.state.checked) {
                msg = "Thank you for your time!"
            } else {
                msg= "We would like to hear your answer"
            }
        return(
            <div className='checklist'>
                <p>Are you satisfied? Check if your answer is "Yes".</p><input type='checkbox' onChange={this.handleCheck} defaultChecked={this.state.checked}/>
                <p>{msg}</p>
            </div>
        )
    }
};

export default checklist;