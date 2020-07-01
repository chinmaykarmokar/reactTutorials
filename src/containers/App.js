import React from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/cockpit'
import styled from 'styled-components';
import myClasses from './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      persons : [
        { name : "Chinmay" , age : 18 , font : "Cookie" },
        { name : "Tanmoy" , age : 27 , font : "Roboto"},
        { name : "Seema" , age : 46 , font : "Niconne"}
      ],
      showPersons: false,
      showCockpit: true
    }
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        { name : event.target.value , age : 18 , font : "Cookie" },
        { name : event.target.value , age : 27 , font : "Roboto" },
        { name : event.target.value , age : 46 , font : "Niconne" }
      ]
    })
  }

  render(){

    let persons = null;

    if (this.state.showPersons) {
      persons =(
      <div>
        <Persons
          persons = {this.state.persons}
          changed = {this.nameChangeHandler}
        />
      </div> 
      ) 
      /*myStyles.backgroundColor = "red";*/
    }

    let classes = ['red','bold'].join(' ');

    return(
      <div className = "App">
      <button onClick = {() => {
          this.setState({showCockpit:false});
      }}>
      Hide Cockpit
      </button>
      {this.state.showCockpit ? (
        <Cockpit
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
      ) : null}
        {persons}
      </div>
    )
  }
}

export default App;
