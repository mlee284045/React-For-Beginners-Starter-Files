import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	constructor() {
		super();

		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event, key) {
		const fish = this.props.fishes[key];
		const updatedfish = {
			...fish,
			[event.target.name]: event.target.value
		};

		this.props.updateFish(key, updatedfish);
	}

	renderInventory(key) {
		const fish = this.props.fishes[key];

		return (
			<div className="fish-edit" key={key}>
				<input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)}/>
				<input type="text" name="price" value={fish.price} placeholder="Fish Price" onChange={(e) => this.handleChange(e, key)}/>
				<select name="status" value={fish.status} onChange={(e) => this.handleChange(e, key)}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" value={fish.desc} placeholder="Fish Description" onChange={(e) => this.handleChange(e, key)}></textarea>
				<input name="image" value={fish.image} type="text" placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)}/>
				<button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
			</div>
		);
	}

	render() {
		return (
			<div className="menu">
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(this.renderInventory)}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
			</div>
		)
	}
}

Inventory.propTypes = {
	addFish: React.PropTypes.func.isRequired,
	fishes: React.PropTypes.object.isRequired,
	loadSamples: React.PropTypes.func.isRequired,
	removeFish: React.PropTypes.func.isRequired,
	updateFish: React.PropTypes.func.isRequired
}

export default Inventory;