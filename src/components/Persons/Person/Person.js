import React, {Component} from 'react';
import Person from './Person.module.css';
import Aux from '../../../hoc/Auix'
import styled from 'styled-components';

const StyledDiv = styled.div`
	padding: 15px;
	text-align: center;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
	width: 60%;
	margin: 15px auto;

	@media (min-width : 500px):{
		width:"450px"
	}
`
;

class MyPerson extends Component {

	render(){
		return (
			<Aux>
				<h3 id = "clicks" style = {{fontFamily:this.props.font}} onClick = {this.props.click}>Hello I am {this.props.name}! I am {this.props.age} years old {this.props.font}</h3>
				<input type = "text" onChange = {this.props.changed}/>
				<h3>{this.props.children}</h3>
			</Aux>		
		)
	}	
}

export default MyPerson;