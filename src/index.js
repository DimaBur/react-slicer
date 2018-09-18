import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import PropTypes from "prop-types";
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
		const {pageName} = this.props;
		return (
			<BrowserRouter>
				<Route path={`/${pageName}:pageNum`} render={(routeProps) => <Viewer {...routeProps} {...this.props} ref={component => (this.viewer = component)}/>}/>
			</BrowserRouter>
		);
	}
};

Slicer.defaultProps = {
	pageName: "page-"
};

Slicer.propTypes = {
	pageName: PropTypes.string
};

export default Slicer;