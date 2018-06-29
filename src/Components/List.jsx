import React, { Component } from 'react';

class List extends Component {
	constructor(props) {
		super(props);
		this.state= {
			fullTodos: [],
			value: 0
		}
	}
	onDelete(i){
		this.setState({
			fullTodos:  this.props.getTodos,
			value: i
		})
		console.log(this.state.value)
		// this.state.fullTodos.splice(i, 1);
		this.props.onDeleteTask(this.state.value);
	}
	onDone(i){
		this.setState({
			fullTodos:  this.props.getTodos,
			value: i
		})
		document.getElementsByClassName('task')[i].classList.toggle("done");
	}
	render(){
		var fullList = this.props.getTodos.map((todo, i) => {
			return <div key={i}>
				<li className="task pointer" onClick={this.onDone.bind(this, i)}>{todo}</li>
				<button onClick={this.onDelete.bind(this, i)}>Supprimer</button>
			</div>;
		})
		return <div>
			<ul>
				{fullList}
			</ul>
		</div>
	}
}

export default List;
