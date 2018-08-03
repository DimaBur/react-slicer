import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Pagination = (props) => {
	const {numberOfPages, currentPage, setPage, prevPage, nextPage, prevBtn, nextBtn, customClass} = props;

	function renderPagination () {
		const pagination = [];
		for (let i = 1; i <= numberOfPages; i++) {
			pagination.push(i);
		}
		return pagination.map(number => (
			<li
				className={classNames(`${customClass}__pagination-item`, {
					[`${customClass}__pagination-item_active`]: number === currentPage
				})}
				key={number}
				id={`num-${number}`}
				onClick={() => setPage(number)}
			>
				{number}
			</li>
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
	numberOfPages:  PropTypes.number,
	currentPage: PropTypes.number,
	setPage: PropTypes.func,
	prevPage: PropTypes.func,
	nextPage: PropTypes.func,
	prevBtn: PropTypes.object,
	nextBtn: PropTypes.object,
	customClass: PropTypes.string
};

export default Pagination;
