import React from "react";
import PropTypes from "prop-types";
import "./scss/style.scss";
import Pagination from "./components/Pagination";

class Slicer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: this.props.initialPage
		};
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.setPage = this.setPage.bind(this);
	}

	setPage(index) {
		if (Number.isInteger(index) && index > 0 && index <= this.numberOfPages) {
			this.setState({
				currentPage: Number(index)
			});
		}
	}

	renderItems() {
		const {children, itemsPerPage} = this.props,
			{currentPage} = this.state;
		this.numberOfPages = Math.ceil(children.length / itemsPerPage);
		const lastItemIndex = currentPage * itemsPerPage,
			firstItemIndex = currentPage * itemsPerPage - itemsPerPage,
			currentItems = children.slice(firstItemIndex, lastItemIndex);
		return currentItems.map(item => item);
	}

	prevPage() {
		const {currentPage} = this.state;
		if (currentPage > 1) {
			this.setState({
				currentPage: currentPage - 1
			});
		}
	}

	nextPage() {
		const {currentPage} = this.state;
		if (currentPage < this.numberOfPages) {
			this.setState({
				currentPage: currentPage + 1
			});
		}
	}

	render() {
		const {pagination, prevBtn, nextBtn, customClass} = this.props,
			{currentPage} = this.state;

		return (
			<div className={customClass}>

				<div className={`${customClass}__view`}>
					{this.renderItems()}
				</div>


				{pagination ? <Pagination
					numberOfPages={this.numberOfPages}
					currentPage={currentPage}
					setPage={this.setPage}
					prevPage={this.prevPage}
					nextPage={this.nextPage}
					prevBtn={prevBtn}
					nextBtn={nextBtn}
					customClass={customClass}
				/> : null}
			</div>
		);
	}
}

Slicer.defaultProps = {
	initialPage: 1,
	itemsPerPage: 4,
	customClass: "react-slicer",
	pagination: true,
	prevBtn: <span className="react-slicer__arrow react-slicer__arrow_prev">
		{"<"}
	</span>,
	nextBtn: <span className="react-slicer__arrow react-slicer__arrow_next">
		{">"}
	</span>
};

Slicer.propTypes = {
	children: PropTypes.array,
	customClass: PropTypes.string,
	initialPage: PropTypes.number,
	itemsPerPage: PropTypes.number,
	nextBtn: PropTypes.object,
	pagination: PropTypes.bool,
	prevBtn: PropTypes.object,
};

export default Slicer;
