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
      <Jumbotron fluid className={styles.Body}>
        <Container>
          <h1 className={styles.Title}>{this.props.document.title || "Unknown"} </h1>
          <br />
          <br />
          <p className={styles.Text}> {this.props.document.text || "Unknown"} </p>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Jumbotron>
    );
  }
}
