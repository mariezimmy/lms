import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Multiselect from './multiselect/Multiselect';
import Row from "react-bootstrap/Row";
import styles from "./FilterDropdown.module.scss";

interface IFilterDropdownState {
	// stubbed for now until actual method implemented
	query: any;
	month?: any;
	day?: any;
	year?: any
	correspondant?: string;
}

interface IFilterDropdownProps {
	// stubbed for now until actual method implemeneted
	filter: (query: any) => Promise<void>;
}

const correspondant_options = [
	{ name: 'Gherard', value: 'Gherard' },
	{ name: 'White', value: 'White' },
	{ name: 'Wotton', value: 'Wotton' },
	{ name: 'Unknown', value: 'Unknown' }
];

export default class FilterDropdown extends Component<IFilterDropdownProps, IFilterDropdownState> {
	constructor(props: any) {
		super(props);
		this.state = {
			query: ""
		};
	}

	result(params) {
		console.log(params);
	}

	render() {
		return (
			<Dropdown className={styles.navDropDown} >
				<DropdownToggle id="id" className={styles.navDropDown}>
					{"Filter"}
				</DropdownToggle>
				<DropdownMenu className={styles.menu}>
					<Form>
						<Row>
							<Col>{"Month"}
								<FormControl
									className={styles.formControl}
									placeholder="mm"
									onChange={(event) => this.setState({ query: event.target.value })}
								/></Col>
							<Col>{"Day"}
								<FormControl
									className={styles.formControl}
									placeholder="dd"
									onChange={(event) => this.setState({ query: event.target.value })}
								/></Col>
							<Col>{"Year"}
								<FormControl
									className={styles.formControl}
									placeholder="yyyy"
									onChange={(event) => this.setState({ query: event.target.value })}
								/></Col>
						</Row>
						<Row>
							<Multiselect placeholder="Select correspondant(s)" options={correspondant_options} onSelectOptions={this.result} />
						</Row>
					</Form>
					<Button onChange={() => { this.props.filter(this.state.query) }}
						href={"#filter/" + this.state.query}
						className={styles.submitButton}
					>Apply
					</Button>
					<Button onChange={() => this.setState({ query: null })}
						className={styles.submitButton}
					>Clear
					</Button>
				</DropdownMenu>
			</Dropdown >
		);
	}
}
