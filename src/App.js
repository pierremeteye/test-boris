import React, { Component } from 'react';

// Import Custom Components
import Form from './Components/Form';
import List from './Components/List';

class App extends Component {
    constructor(props){
        super(props);
        this.state =  {
            todos: []
        }
    }
    getTasks(el){
        this.setState({todos: [...this.state.todos, el] })
    }
    onDeleteTask(el, i){
        this.state.todos.splice(i, 1);
    }
    render() {
        return (
            <div className="App">
                <h1>Todolist</h1>
                <Form getTasks={this.getTasks.bind(this)} />
                <List  
                    getTodos={this.state.todos}
                    onDeleteTask={this.onDeleteTask.bind(this)}                />
            </div>
            );
    }
}

export default App;
