import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';
import Data from './data/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
    };
  }
  

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    console.log('filterUpdate called: ', value)
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
    console.log('selectedUpdate called: ', id)
  }

  removeUpdate(id) {
    console.log('removeUpdate called: ', id)
    var directory = Data.find(object => object.id === id);
    var index = Data.indexOf(directory);
    console.log(index);
    if (index > -1){
      Data.splice(index, 1);
    }
    this.setState({
      selectedBuiding: 0
    })
  }

  addBuilding = (building) => {
    building.id = Math.random();
    Data.push(building)
    console.log('addBuilding called: ', building.id);
    this.setState({
      selectedBuiding: building.id
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code{' '}Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
                removeUpdate={this.removeUpdate.bind(this)}
              />
            </div>
          </div>
          <div>
              <AddBuilding 
                addBuilding={this.addBuilding.bind(this)}
              />
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
