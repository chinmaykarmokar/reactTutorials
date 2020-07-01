import React, {PureComponent} from 'react';

import Person from './Person/Person'

class Persons extends PureComponent {
	/*static getDerivedStateFromProps(props,state){
		console.log('getDerivedStateFromProps');
		return state;
	}*/

	/*componentWillReceiveProps(props){
		console.log('componentWillReceiveProps',props);
	}

	shouldComponentUpdate(nextProp,nextState){
		console.log('shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps,pervState){
		console.log('getSnapshotBeforeUpdate');
		return {message : "Snapshot"};
	}*/

	/*componentDidMount(){
		console.log('componentDidMount');
	}*/

	render(){
		return(
			this.props.persons.map(person => {
		    	return <Person
		        	name = {person.name}
		        	age = {person.age}
		        	font = {person.font}
		        	changed = {this.props.changed}
		       	/>
		 	})
		) 	
	}
}
	


export default Persons;