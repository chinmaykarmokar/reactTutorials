import React, { useState, useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context'


const Cockpit = (props) => {

	const toggleBtnRef = useRef(null);

	const authContext = useContext(AuthContext);

	useEffect( () => {
		console.log('useEffect');
		toggleBtnRef.current.click();
		/*const timer = setTimeout(() => {
			alert('Saved data to cloud');
		},3000);
		return () => {
			clearTimeout(timer);
			console.log('cleanup work in useEffect');
		}*/
	}, []);

	return (
		<div>
			<h1>Hello I am a React app!</h1>
			<button ref = {toggleBtnRef} className = "Button" onClick={props.clicked}>Switch Name</button>
				<button onClick = {authContext.login}>Log in</button>
		</div>
	)
}

export default Cockpit;