import React, { Component } from 'react';

// Import Custom Components
import Form from './Components/Form';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Todolist</h1>
                <Form />
            </div>
            );
    }
}

export default App;
