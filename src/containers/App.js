import React from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/cockpit'
import styled from 'styled-components';
import myClasses from './App.css';
import withClass from '../hoc/withClass'
import Auix from '../hoc/Auix'
import AuthContext from '../context/auth-context'

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
      showCockpit: true,
      authenticated : false
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

  loginHandler = () => {
  	this.setState({
  		authenticated : true
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
          isAuthenticated = {this.state.authenticated}
        />
      </div> 
      ) 
      /*myStyles.backgroundColor = "red";*/
    }

    let classes = ['red','bold'].join(' ');

    return(
      <Auix className = "App">
      <button onClick = {() => {
          this.setState({showCockpit:false});
      }}>
      Hide Cockpit
      </button>
      <AuthContext.Provider value = {{
      	authenticated : this.state.authenticated, 
      	login : this.loginHandler
      }}>
      {this.state.showCockpit ? (
        <Cockpit
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
      ) : null}
        {persons}
       </AuthContext.Provider> 
      </Auix>
    )
  }
}

export default withClass(App);
