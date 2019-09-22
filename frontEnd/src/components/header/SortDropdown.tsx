import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./SortDropdown.module.scss";

export default class SortDropdown extends Component {
	sortByDateNewestToOldest() {
		return;
	}

	sortByDateOldestToNewest() {
		return;
	}

	sortByTitle() {
		return;
	}

	render() {
		return (
			<NavDropdown title="Sort" id="basic-nav-dropdown" className = {styles.Sort}>
				<NavDropdown.Item
					onClick={this.sortByDateNewestToOldest.bind(this)}
					href="#sort/newest-oldest"
				>
					Date (newest - oldest)
				</NavDropdown.Item>
				<NavDropdown.Item
					onClick={this.sortByDateOldestToNewest.bind(this)}
					href="#sort/oldest-newest"
				>
					Date (oldest - newest)
				</NavDropdown.Item>
				<NavDropdown.Item onClick={this.sortByTitle.bind(this)} href="#sort/title">
					Title (A - Z)
				</NavDropdown.Item>
			</NavDropdown>
		);
	}
}