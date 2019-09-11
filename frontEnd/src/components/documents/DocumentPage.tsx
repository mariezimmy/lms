import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styles from "./DocumentPage.module.scss";
import LitDocument from "../../model/LitDocument";

interface IDocumentPageProps {
	document: LitDocument;
}

export default class DocumentPage extends Component<IDocumentPageProps> {

	render(): JSX.Element {
		return (
			<Jumbotron fluid >
				<Container>
					<h1>{this.props.document.title} </h1>
					< br />
					<p className={styles.Text} > {this.props.document.text} </p>
				</Container>
			</Jumbotron>
		);
	}
}
