import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Viewer from "./components/List";

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
			<BrowserRouter >
				<Route path="/:pageNum" render={(routeProps) => <Viewer {...routeProps} {...this.props} ref={component => (this.viewer = component)}/>}/>
			</BrowserRouter>
		);
	}
};

export default Slicer;