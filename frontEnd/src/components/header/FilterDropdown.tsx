import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./FilterDropdown.module.scss";

export default class FilterDropdown extends Component {
	render() {
		return (
			<NavDropdown
				className={styles.dropdownPadding}
				title="Filter"
				id="basic-nav-dropdown"
			>
				<NavDropdown.Item href="#action/3.1" className = {styles.dropdownItem}>Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2" className = {styles.dropdownItem}>Another action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3" className = {styles.dropdownItem}>Something</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4" className = {styles.dropdownItem}>Separated link</NavDropdown.Item>
			</NavDropdown>
		);
	}
}