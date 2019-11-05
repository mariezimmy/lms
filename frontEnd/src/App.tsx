import React, { Component } from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Link, Route } from "react-router-dom";
import DocumentPage from "./components/documents/DocumentPage";
import LocalDocumentService from "./services/documentService/LocalDocumentService";
import TestDocumentService from "./services/documentService/TestDocumentService";
import IDocumentService from "./services/documentService/IDocumentService";
import styles from "./App.module.scss";
import LitDocument from "./model/LitDocument";
import SortBy from "./model/SortBy";
import About from "./components/header/About";
import DocumentList from "./components/DocumentList";

interface IAppState {
	documents?: LitDocument[];
}

export default class App extends Component<any, IAppState> {
	private documentService: IDocumentService;

	constructor(props: any) {
		super(props);
		this.state = {};

		this.documentService = new LocalDocumentService(); // uncomment for backend services
		//this.documentService = new TestDocumentService(); // uncomment for frontend testing
		this.loadDocuments();
	}

	public async sort(sortBy: SortBy): Promise<void> {
		let docs = await this.documentService.sortDocuments(sortBy)
		this.setState({ documents: docs })
	}

	public async search(query: string): Promise<void> {
		let docs = await this.documentService.searchDocuments(query)
		this.setState({ documents: docs })
	}

	// stubbed for now
	public async filter(query: any): Promise<void> {
		await this.documentService.searchDocuments(query)
	}

	public async loadDocuments() {
		let documents = await this.documentService.getDocuments();
		this.setState({ documents: documents })
	}

	render(): JSX.Element {
		let documents = this.state.documents; //Just a shorthand
		return (
			<BrowserRouter>
				{documents &&
					documents.map(document => (
						<Route
							exact
							path={"/" + document.uniqueID.toString()}
							key={document.uniqueID}
							render={() => (
								<div>
									<Header
										sort={this.sort.bind(this)}
										search={this.search.bind(this)}
										filter={this.filter.bind(this)}
									/>
									<div className={styles.App}>
										<DocumentPage document={document} />
									</div>
								</div>
							)}
						/>
					))}

				<Route
					exact
					path={"/"}
					render={() => (
						<div>
							<Header
								sort={this.sort.bind(this)}
								search={this.search.bind(this)}
								filter={this.filter.bind(this)}
							/>
							<div className={styles.App}>
								{this.state.documents &&
									<DocumentList
										documents={this.state.documents}
									/>
								}
								<br />
							</div>
						</div>
					)}
				/>

				<Route
					exact
					path={"/about"}
					render={() => (
						<div>
							<Header
								sort={this.sort.bind(this)}
								search={this.search.bind(this)}
								filter={this.filter.bind(this)}
							/>
							<div className={styles.App}>
								<About></About>
							</div>
						</div>
					)}
				/>

			</BrowserRouter>
		);
	}
}
