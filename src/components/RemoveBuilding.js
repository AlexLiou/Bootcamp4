import React, { Component } from 'react';

class RemoveBuilding extends Component {
    render() {
        const {selectedBuilding, removeUpdate } = this.props;

        
        return (
            <button
                onClick={() => {removeUpdate(selectedBuilding)}}
            >
                Remove Building
            </button>
        );
    }
}

export default RemoveBuilding;