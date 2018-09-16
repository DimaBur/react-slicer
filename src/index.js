import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Viewer from "./components/Viewer";

class Slicer extends Component {
	constructor(props) {
		super(props);
	}

	setPage(num) {
		this.viewer.setPage(num);
	}

	prevPage() {
		this.viewer.prevPage();
	}

	nextPage() {
		this.viewer.nextPage();
	}

	render() {
		return (
			<Router {...this.props}>
				<Viewer {...this.props} onRef={component => (this.viewer = component)}/>
			</Router>
		);
	}
};

export default Slicer;