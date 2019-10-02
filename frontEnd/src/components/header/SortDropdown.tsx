import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./SortDropdown.module.scss";
import SortBy from "../../model/SortBy";

interface ISortDropdownProps {
	sort: (sortBy: SortBy) => Promise<void>;
}


export default class SortDropdown extends Component<ISortDropdownProps> {

	private sorts: SortBy[] = [SortBy.TitleAZ, SortBy.TitleZA, SortBy.AuthorAZ, SortBy.AuthorZA,]

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<NavDropdown title="Sort" id="basic-nav-dropdown" className={styles.Sort}>
				{
					this.sorts.map((sort: SortBy) => {
						<NavDropdown.Item
						onClick={() => { this.props.sort(sort) }}
						href={"#sort/" + sort.endpoint}
						className={styles.dropdownItem}
					>
						{sort.description}
					</NavDropdown.Item>
	
					})
				}
			</NavDropdown>
		);
	}
}
