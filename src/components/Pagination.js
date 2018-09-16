import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Pagination = (props) => {
	const {numberOfPages, currentPage, setPage, prevPage, nextPage, prevBtn, nextBtn, customClass} = props;

	function renderPagination() {
		const pagination = [];
		for (let i = 1; i <= numberOfPages; i++) {
			pagination.push(i);
		}
		return pagination.map(number => (
			<Link to={`/${number}`}
				  className={classNames(`${customClass}__pagination-item`, {
					  [`${customClass}__pagination-item_active`]: number === currentPage
				  })}
				  key={number}
				  id={`num-${number}`}
				  onClick={() => setPage(number)}
			>
				{number}
			</Link>
		));
	}

	return (
		<ul className={`${customClass}__pagination`}>
			<li className={`${customClass}__pagination-item ${customClass}__pagination-item_prev`} onClick={prevPage}>
				{prevBtn}
			</li>
			{renderPagination()}
			<li className={`${customClass}__pagination-item ${customClass}__pagination-item_next`} onClick={nextPage}>
				{nextBtn}
			</li>
		</ul>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number,
	customClass: PropTypes.string,
	nextBtn: PropTypes.object,
	nextPage: PropTypes.func,
	numberOfPages: PropTypes.number,
	prevBtn: PropTypes.object,
	prevPage: PropTypes.func,
	setPage: PropTypes.func
};

export default Pagination;
