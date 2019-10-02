import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./SortDropdown.module.scss";
import SortBy from "../../model/SortBy";

interface ISortDropdownProps {
	sort: (sortBy: SortBy) => Promise<void>;
}


export default class SortDropdown extends Component<ISortDropdownProps> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<NavDropdown title="Sort" id="basic-nav-dropdown" className={styles.Sort}>
				<NavDropdown.Item
					onClick={() => {this.props.sort(SortBy.TitleAZ)}}
					href="#sort/titleAZ"
					className={styles.dropdownItem}
				>
					Title (A - Z)
				</NavDropdown.Item>
				<NavDropdown.Item
					onClick={() => {this.props.sort(SortBy.TitleZA)}}
					href="#sort/titleZA"
					className={styles.dropdownItem}
				>
					Title (Z - A)
				</NavDropdown.Item>
				<NavDropdown.Item
					onClick={() => {this.props.sort(SortBy.AuthorAZ)}}
					href="#sort/authorAZ"
					className={styles.dropdownItem}
				>
					Author (A - Z)
				</NavDropdown.Item>
				<NavDropdown.Item
					onClick={() => {this.props.sort(SortBy.AuthorZA)}}
					href="#sort/authorZA"
					className={styles.dropdownItem}
				>
					Author (Z - A)
				</NavDropdown.Item>
			</NavDropdown>
		);
	}
}
