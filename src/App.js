import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Banner from './Banner/Banner';
import User from './User/User';
import Checklist from './Checklist/Checklist';
import Board from './Board/Board';

class App extends Component {
    // Method that happens right before initial render happens, before the DOM renders for the first time
    // componentWillMount() {
    //     alert('Page will load');
    // }
    // componentDidMount() {
    //     alert("It's loaded");
    // }
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         backgroundColor: 'azure'
    //     }
    //     this.update = this.update.bind(this);
    // }
    // update() {
    //     this.setState({
    //         backgroundColor: 'wheat'
    //     })
    // }
    // componentDidUpdate() {
    //     alert('Did updated');
    // }
  state = {
    // 38video
    users: [
        {firstName:'Eve'}
    ],
    persons: [
        {name:'Max', age:28},
        {name:'Blah', age:29},
        {name:'Hah', age:30}
    ],
      otherState: 'Some other value'
  };


  switchNameHendler = () => {
    // console.log("Clicked");
      this.setState({persons: [
              {name:'fgf', age:248},
              {name:'dgfdg', age:279},
              {name:'dfgdfgd', age:300}
          ]})
  };

    nameChangedHendler = (event) => {
        // console.log("Clicked");
        this.setState({persons: [
                {name:'Max', age:24},
                {name: event.target.value, age:44},
                {name:'Vox', age:22}
            ]})
    };

  render() {
        return (
          <div className="App">
              <Banner/>
              <User firstName={this.state.users[0].firstName}/>
            <h2>Hi!</h2>
            <button onClick={() => this.switchNameHendler('Maximilian')}>Switch name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                    click={this.switchNameHendler} changed={this.nameChangedHendler}>My hobbies: Swimming</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
              <Checklist/>
              <Board count={50}/>

          </div>
        );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null ,'Do something...'));

  }
}

export default App;
