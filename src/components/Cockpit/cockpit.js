import React, { useState,useEffect } from 'react';

const Cockpit = (props) => {

	useEffect( () => {
		console.log('useEffect');
		const timer = setTimeout(() => {
			alert('Saved data to cloud');
		},3000);
		return () => {
			clearTimeout(timer);
			console.log('cleanup work in useEffect');
		}
	}, []);

	return (
		<div>
			<h1>Hello I am a React app!</h1>
			<button className = "Button" onClick={props.clicked}>Switch Name</button>
		</div>
	)
}

export default Cockpit;