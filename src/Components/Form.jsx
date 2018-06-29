import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props)
		this.state = {
			value: '',
			newTask: ''
		}
	}

	onChange(e){
		this.setState({
			value: e.target.value,
			newTask: e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault();
		this.props.getTasks(this.state.newTask);
		this.setState({
			value: ''
		});
	}


    render(){
		return <form onSubmit={this.onSubmit.bind(this)}>
			<input type="text" placeholder="Ajouter un nom" value={this.state.value} onChange={this.onChange.bind(this)}/>
			<input type="submit"/>
		</form>
	}
}

export default Form;
