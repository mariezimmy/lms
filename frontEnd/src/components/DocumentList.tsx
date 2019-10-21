import React, { Component } from "react";
import styles from "./DocumentList.module.scss";
import LitDocument from "../model/LitDocument";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DocumentPreview from "./documents/DocumentPreview";
import Pagination from 'react-bootstrap/Pagination'

interface IDocumentListState {
	currentPage: number;
}

interface IDocumentListProps {
	documents: LitDocument[];
}

export default class DocumentList extends Component<IDocumentListProps, IDocumentListState> {

	private maxDocumentsPerPage: number = 8; // Probably change this to calculate dynamically
	private totalPages: number = 0;

	constructor(props: IDocumentListProps) {
		super(props);
		this.state = { currentPage: 0 };

		this.totalPages = Math.ceil(this.props.documents.length / this.maxDocumentsPerPage);
	}

	private setCurrentPage(newPage: number) {
		console.log("setting current pageeufwofweoufiewfuwei!");
		console.log(newPage)
		// this.setState({ currentPage: newPage });
	}

	render(): JSX.Element {
		let documentsDisplayedThisPage: LitDocument[] = this.props.documents.slice(
			this.maxDocumentsPerPage * this.state.currentPage,
			this.maxDocumentsPerPage * (this.state.currentPage + 1)
		);

		console.log(documentsDisplayedThisPage);

		return (
			<div>
				<div className={styles.AppDocuments}>
					{documentsDisplayedThisPage.map(document => (
						<Link to={"/" + document.uniqueID.toString()} key={document.uniqueID}>
							<DocumentPreview document={document} />
						</Link>
					))}
				</div>
				<div className={styles.Pagination}>
					<Pagination>
						{
							this.state.currentPage > 0 ?
								<>
									<Pagination.First onClick={this.setCurrentPage(0)} />
									<Pagination.Prev onClick={this.setCurrentPage(this.state.currentPage - 1)} />
									<Pagination.Item onClick={this.setCurrentPage(this.state.currentPage - 1)} >{this.state.currentPage}</Pagination.Item>
								</>
								:
								<></>
						}
						<Pagination.Item active>{this.state.currentPage + 1}</Pagination.Item>
						{
							this.state.currentPage < this.totalPages - 1 ?
								<>
									<Pagination.Item onClick={this.setCurrentPage(this.state.currentPage + 1)} >{this.state.currentPage + 2}</Pagination.Item>
									<Pagination.Next onClick={this.setCurrentPage(this.state.currentPage + 1)} />
									<Pagination.Last onClick={this.setCurrentPage(this.totalPages - 1)} />
								</>
								:
								<></>
						}
					</Pagination>
				</div>
			</div>
		);
	}
}
