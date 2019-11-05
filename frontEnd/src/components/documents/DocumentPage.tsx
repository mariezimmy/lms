import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styles from "./DocumentPage.module.scss";
import LitDocument from "../../model/LitDocument";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import DocComment from "../../model/DocComment";
import CommentSidebar from "../comments/CommentSidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ICommentService from "../../services/commentService/ICommentService";
import TestCommentService from "../../services/commentService/TestCommentService";
import ITagService from "../../services/tagService/ITagService";
import LocalTagService from "../../services/tagService/LocalTagService";

interface IDocumentPageProps {
	document: LitDocument;
}

interface IDocumentPageState {
	comments?: DocComment[];
	tag: string;
}

export default class DocumentPage extends Component<IDocumentPageProps, IDocumentPageState> {

	private commentService: ICommentService;
	private tagService: ITagService;

	constructor(props: IDocumentPageProps) {
		super(props);
		this.state = { comments: undefined, tag: "" };
		this.commentService = new TestCommentService();
		this.tagService = new LocalTagService();
		this.getComments(this.props.document);
	}

	private async getComments(document: LitDocument) {
		let docComments: DocComment[] = await this.commentService.getComments(document);
		this.setState({ comments: docComments });
	}

	private async addTag(document: LitDocument, tag: string) {
		let taggedDoc = await this.tagService.tagDocument(document, tag);
		return taggedDoc;
	}

	private formatTags(tags: string[]) {
		var formattedTags = "";
		if (tags !== undefined) {
			for (var i = 0; i < tags.length - 1; i++) {
				formattedTags = formattedTags.concat(tags[i]);
				formattedTags = formattedTags.concat(', ');
			}
			formattedTags = formattedTags.concat(tags[tags.length - 1]);
		}
		return formattedTags;
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
					<Row className={styles.padding}>
						<Col sm={4}>
							{/* need to update this dynamically */}
							<p className={styles.tags}> Current tags: {this.formatTags(this.props.document.tags || [])}</p>
						</Col>
						<Col>
							<Form className={styles.left}>
								<Row>
									<div>
										<FormControl
											type="tag"
											className={styles.tagForm}
											placeholder="Tag this document!"
											onChange={(event) => this.setState({ tag: (event.target.value) })}
										/>
									</div>
									<div>
										<Button variant="outline-info" onClick={() => { this.addTag(this.props.document, this.state.tag) }}
											href={'#tag/' + this.state.tag}
											className={styles.tagButton}
										>
											Add Tag
        								</Button>
									</div>
								</Row>
							</Form>

						</Col>
					</Row>
				</Container>
			</Jumbotron >
		);
	}
}
