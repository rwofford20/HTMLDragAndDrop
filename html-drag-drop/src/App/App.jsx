import React, { Component } from 'react';
import './App.css';

export default class ToDoDragDropDemo extends Component {
    state = {
        tasks: [
            {id: "1", taskName: "Read book", type: "inProgress", backgroundColor: "red"},
            {id: "2", taskName: "Pay bills", type: "inProgress", backgroundColor: "green"},
            {id: "3", taskName: "Go to the gym", type: "Done", backgroundColor: "blue"},
            {id: "4", taskName: "Play baseball", type: "Done", backgroundColor: "green"} 
        ]
    }
    
    render() {
        return (
            <div className="drag-container">
                <h2 className="head">To Do List Drag & Drop</h2>
            </div>
        );
    }
}