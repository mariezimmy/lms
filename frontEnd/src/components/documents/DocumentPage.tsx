import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styles from "./DocumentPage.module.scss";
import LitDocument from "../../model/LitDocument";
import DocComment from "../../model/DocComment";
import CommentSidebar from "../comments/CommentSidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ICommentService from "../../services/commentService/ICommentService";
import TestCommentService from "../../services/commentService/TestCommentService";

interface IDocumentPageProps {
	document: LitDocument;
}

interface IDocumentPageState {
	comments?: DocComment[];
}

export default class DocumentPage extends Component<IDocumentPageProps, IDocumentPageState> {

	private commentService: ICommentService;

	constructor(props: IDocumentPageProps) {
		super(props);
		this.state = { comments: undefined };
		this.commentService = new TestCommentService();
		this.getComments(this.props.document);
	}

	private async getComments(document: LitDocument) {
		let docComments: DocComment[] = await this.commentService.getComments(document);
		this.setState({ comments: docComments });
	}

	render(): JSX.Element {
		return (
			<Jumbotron fluid className={styles.Body}>
				<Container className={styles.textbckd}>
					<Row>
						<Col sm={8}>
							<h1 className={styles.Title}>{this.props.document.title || "Unknown"} </h1>
							<br />
							<br />
							<p className={styles.Text}> {this.props.document.text || "Unknown"} </p>
						</Col>
						<Col sm={4}>
							<CommentSidebar
								comments={this.state.comments}
							/>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		);
	}
}
