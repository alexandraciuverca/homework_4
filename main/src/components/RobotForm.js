import React from 'react';
import {Component} from 'react';
import RobotList from './RobotList';

class RobotForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            type : '',
            mass : ''
        }
        this.handleChange = (event) => {
            this.setState({
                [event.target.name] : event.target.value
            })
        }
    }
    render(){
        return <div>
            <input id="name" type="text" placeholder="name" onChange={this.handleChange} name="name" />
            <input id="type" type="text" placeholder="type" onChange={this.handleChange} name="type" />
            <input id="mass" type="text" placeholder="mass" onChange={this.handleChange} name="mass" />
            <input id="add" type="button" value="add" onClick={() => this.props.onAdd({
                name : this.state.name,
                type : this.state.type,
                mass : this.state.mass
            })} name="content" />
        </div>
    }
}

export default RobotForm;