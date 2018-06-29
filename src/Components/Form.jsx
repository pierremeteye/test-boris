import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props)
		this.state = {
			value: '',
			task: []
		}
	}

	onSubmit(e){
		e.preventDefault();
		this.setState(prevState => ({
			task: [...prevState.task, this.state.value],
			value: ''
		}));
	}

	onChange(e){
		this.setState({
			value: e.target.value
		})
	}

    render(){
		return <form onSubmit={this.onSubmit.bind(this)}>
			<input type="text" placeholder="Ajouter un nom" value={this.state.value} onChange={this.onChange.bind(this)}/>
			<input type="submit"/>
		</form>
	}
}

export default Form;
