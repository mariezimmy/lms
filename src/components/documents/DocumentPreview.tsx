import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import styles from "./DocumentPreview.module.scss";
import LitDocument from "../../model/LitDocument";

interface IDocumentPreviewProps {
  document: LitDocument;
}

export default class DocumentPreview extends Component<IDocumentPreviewProps> {
  render() {
    return (
      <Card className={styles.Zoom}>
        <Card.Title className={styles.Title}>
          {this.props.document.title}
          <Card.Subtitle>{this.props.document.author}</Card.Subtitle>
        </Card.Title>
        <Card.Img
          className={styles.Title}
          variant="top"
          src={this.props.document.image}
        />
      </Card>
    );
  }
}
