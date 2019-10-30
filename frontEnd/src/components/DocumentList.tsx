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

	private maxDocumentsPerPage: number = 6; // Probably change this to calculate dynamically
	private totalPages: number = 0;

	constructor(props: IDocumentListProps) {
		super(props);
		this.state = { currentPage: 0 };

		this.totalPages = Math.ceil(this.props.documents.length / this.maxDocumentsPerPage);
	}

	private setCurrentPage(newPage: number) {
		if (newPage < 0 || newPage > this.totalPages - 1) {
			this.setState({ currentPage: this.state.currentPage });
		} else {
			this.setState({ currentPage: newPage });
		}
	}

	render(): JSX.Element {
		let documentsDisplayedThisPage: LitDocument[] = this.props.documents.slice(
			this.maxDocumentsPerPage * this.state.currentPage,
			this.maxDocumentsPerPage * (this.state.currentPage + 1)
		);

		let documentRow1: LitDocument[] = documentsDisplayedThisPage.slice(0, this.maxDocumentsPerPage / 2);
		let documentRow2: LitDocument[] = documentsDisplayedThisPage.slice(this.maxDocumentsPerPage / 2, this.maxDocumentsPerPage);

		console.log(documentsDisplayedThisPage);

		return (
			<div>
				<div className={styles.AppDocuments}>
					<Row className={styles.individualDocuments}>
						{documentRow1.map(document => (
							<Link to={"/" + document.uniqueID.toString()} key={document.uniqueID}>
								<div className={styles.left}>
									<DocumentPreview document={document} />
								</div>
							</Link>
						))}
					</Row>
					<Row className={styles.individualDocuments}>
						{documentRow2.map(document => (
							<Link to={"/" + document.uniqueID.toString()} key={document.uniqueID}>
								<div className={styles.left}>
									<DocumentPreview document={document} />
								</div>
							</Link>
						))}
					</Row>
				</div>
				<div className={styles.Pagination}>
					<Pagination className={styles.Pagination}>
						<Pagination.First className={styles.PaginationItems} onClick={() => { this.setCurrentPage(0) }} />
						<Pagination.Prev className={styles.PaginationItems} onClick={() => { this.setCurrentPage(this.state.currentPage - 1) }} />
						<Pagination.Ellipsis className={styles.PaginationItems} />
						{this.state.currentPage > 0 ? <>
							<Pagination.Item className={styles.PaginationItems} onClick={() => { this.setCurrentPage(this.state.currentPage - 1) }} >{this.state.currentPage}</Pagination.Item>
						</> : <></>}

						<Pagination.Item className={styles.PaginationItems} active>{this.state.currentPage + 1}</Pagination.Item>

						{this.state.currentPage < this.totalPages - 1 ? <>
							<Pagination.Item className={styles.PaginationItems} onClick={() => { this.setCurrentPage(this.state.currentPage + 1) }} >{this.state.currentPage + 2}</Pagination.Item>
						</> : <></>}
						<Pagination.Ellipsis className={styles.PaginationItems} />
						<Pagination.Next className={styles.PaginationItems} onClick={() => { this.setCurrentPage(this.state.currentPage + 1) }} />
						<Pagination.Last className={styles.PaginationItems} onClick={() => { this.setCurrentPage(this.totalPages - 1) }} />
					</Pagination>
				</div>
			</div>
		);
	}
}
