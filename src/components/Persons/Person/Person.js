import React, {Component} from 'react';
import Person from './Person.module.css';
import Aux from '../../../hoc/Auix'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

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

	constructor(props){
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount(){
		this.inputElementRef.current.focus();
	}

	render(){
		return (
			<Aux>
				{ this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p> }
				<h3 id = "clicks" style = {{fontFamily:this.props.font}} onClick = {this.props.click}>Hello I am {this.props.name}! I am {this.props.age} years old {this.props.font}</h3>
				<input type = "text" onChange = {this.props.changed} ref = {this.inputElementRef}/>
				<h3>{this.props.children}</h3>
			</Aux>		
		)
	}	
}

MyPerson.propTypes = {
	click : PropTypes.func,
	name : PropTypes.string,
	age : PropTypes.number,
	changed : PropTypes.func
}

export default MyPerson;