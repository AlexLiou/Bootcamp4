import React from 'react';
import RemoveBuilding from './RemoveBuilding'


class ViewBuilding extends React.Component {
	render() {
		
		const { data, selectedBuilding } = this.props
		const building = data
		.filter( directory => directory.id === selectedBuilding
		)
		.map( directory => {
			let address = directory.address;
			if (!directory.address) address = 'N/A';
			if (!directory.coordinates) directory.coordinates = {latitude: 'N/A', longitude: 'N/A'}
			console.log(directory.coordinates);
				return (
					<div className="Card"> 
						<h3 className="directoryHeader">
							{directory.name}
						</h3>
						<ul className="list">
							<li className="directoryId">Id: {' '}{directory.id}</li>
							<li className="directoryCode">Abbreviation: {' '}{directory.code}</li>
							<li className="directoryAddress">Address: {' '}{address}</li>
							<li>Coordinates:</li>
							<li className="directoryLatitude">Latitude: {' '}{directory.coordinates.latitude}</li>
							<li className="directoryLongitude">Longitude: {' '}{directory.coordinates.longitude}</li>
						</ul>
						<br></br>
						
						<RemoveBuilding 
              				data={this.props.data}
              				removeUpdate={this.props.removeUpdate}
              				selectedBuilding={this.props.selectedBuilding}
            			/>
					</div>
				)
		
		});
		return (
			<div>
				<p placeholder='Click on a name to view more information'>
					{building}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
