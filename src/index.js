import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
		console.log(this.props);
		return (
			<BrowserRouter >
				<Route path="/" render={(routeProps) => <Viewer {...routeProps} {...this.props} ref={component => (this.viewer = component)}/>}/>
			</BrowserRouter>
		);
	}
};

export default Slicer;