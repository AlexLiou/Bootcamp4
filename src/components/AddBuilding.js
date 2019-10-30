import React, { Component } from 'react';

class AddBuilding extends Component {

    state={
        id: null,
        code: null,
        name: null,
        address: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBuilding(this.state)
        this.setState({
            code: "",
            name: "",
            address: "",
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Code:</label>
                    <input type="text" id="code" value={this.state.code} onChange={this.handleChange}/>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                    <label htmlFor="name">Address:</label>
                    <input type="text" id="address" value={this.state.address} onChange={this.handleChange}/>
                    <button>Add Building</button>
                </form>
            </div>
        )
    }
}

export default AddBuilding;