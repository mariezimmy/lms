import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./SortDropdown.module.scss";
import IDocumentService from "../../services/documentService/IDocumentService";
import LocalDocumentService from "../../services/documentService/LocalDocumentService";
import LitDocument from "../../model/LitDocument";
import App from "../../App";

export default class SortDropdown extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  sortByDateNewestToOldest() {
    return;
  }

  sortByDateOldestToNewest() {
    return;
  }

  async sortByTitle() {
    var documentService = new LocalDocumentService();
    let documents = await documentService.sortDocumentsByTitle();
    this.props.setDocuments(documents);
  }

  render() {
    return (
      <NavDropdown title="Sort" id="basic-nav-dropdown" className={styles.Sort}>
        <NavDropdown.Item
          onClick={this.sortByDateNewestToOldest.bind(this)}
          href="#sort/newest-oldest"
          className={styles.dropdownItem}
        >
          Date (newest - oldest)
        </NavDropdown.Item>
        <NavDropdown.Item
          onClick={this.sortByDateOldestToNewest.bind(this)}
          href="#sort/oldest-newest"
          className={styles.dropdownItem}
        >
          Date (oldest - newest)
        </NavDropdown.Item>
        <NavDropdown.Item
          onClick={this.sortByTitle.bind(this)}
          href="#sort/title"
          className={styles.dropdownItem}
        >
          Title (A - Z)
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
}
