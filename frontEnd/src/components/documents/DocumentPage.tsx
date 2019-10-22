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
        <Container className = {styles.textbckd}>
          <h1 className={styles.Title}>{this.props.document.title || "Unknown"} </h1>
          <h4 className={styles.Title}>{this.props.document.author || "Unknown"} </h4>
          <br />
          <hr></hr>
          <br />
          <p className={styles.Text}> {this.props.document.text || "Unknown"} </p>
        </Container>
      </Jumbotron>
    );
  }
}
