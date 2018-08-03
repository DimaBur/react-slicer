import React from "react";
import PropTypes from "prop-types";
import "./scss/style.scss";
import Pagination from "./components/Pagination";

class Slicer extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			items: props.children,
			currentPage: props.initialPage,
			itemsPerPage: props.itemsPerPage
		};
		this.numberOfPages = Math.ceil(props.children.length / props.itemsPerPage);
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.setPage = this.setPage.bind(this);
	}

	shouldComponentUpdate (nextProps, nextState) {
		return this.state.currentPage !== nextState.currentPage;
	}

	setPage (index) {
		if (Number.isInteger(index) && index > 0 && index <= this.numberOfPages) {
			this.setState({
				currentPage: Number(index)
			});
		}
	}

	renderItems () {
		const { items, currentPage, itemsPerPage } = this.state;
		const lastItemIndex = currentPage * itemsPerPage;
		const firstItemIndex = currentPage * itemsPerPage - itemsPerPage;
		const currentItems = items.slice(firstItemIndex, lastItemIndex);

		return currentItems.map(item => item);
	}

	prevPage () {
		const { currentPage } = this.state;
		if (currentPage > 1) {
			this.setState({
				currentPage: currentPage - 1
			});
		}
	}

	nextPage () {
		const { currentPage } = this.state;
		if (currentPage < this.numberOfPages) {
			this.setState({
				currentPage: currentPage + 1
			});
		}
	}

	render () {
		const { prevBtn, nextBtn, customClass } = this.props;
		const {currentPage} = this.state;

		return (
			<div className={customClass}>

				<div className={`${customClass}__view`}>
					{this.renderItems()}
				</div>


				<Pagination
					numberOfPages={this.numberOfPages}
					currentPage={currentPage}
					setPage={this.setPage}
					prevPage={this.prevPage}
					nextPage={this.nextPage}
					prevBtn={prevBtn}
					nextBtn={nextBtn}
					customClass={customClass}
				/>
			</div>
		);
	}
}

Slicer.defaultProps = {
	initialPage: 1,
	itemsPerPage: 4,
	customClass: "react-slicer",
	prevBtn: <span className="react-slicer__arrow react-slicer__arrow_prev">
		{"<"}
	</span>,
	nextBtn: <span className="react-slicer__arrow react-slicer__arrow_next">
		{">"}
	</span>
};

Slicer.propTypes = {
	initialPage: PropTypes.number,
	itemsPerPage: PropTypes.number,
	prevBtn: PropTypes.object,
	nextBtn: PropTypes.object,
	children: PropTypes.array,
	customClass: PropTypes.string
};

export default Slicer;
