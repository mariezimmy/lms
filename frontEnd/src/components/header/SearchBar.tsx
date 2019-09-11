import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styles from "./SearchBar.module.scss";

export default class SearchBar extends Component {
	render() {
		return (
			<Form inline className={styles.searchPadding}>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">
					Search
				</Button>
			</Form>
		);
	}
}
