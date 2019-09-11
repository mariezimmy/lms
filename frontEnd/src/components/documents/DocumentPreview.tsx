import React, { Component } from "react";
import styles from "./DocumentPreview.module.scss";
import LitDocument from "../../model/LitDocument";

interface IDocumentPreviewProps {
  document: LitDocument;
}

export default class DocumentPreview extends Component<IDocumentPreviewProps> {
  render() {
    return (
      <div className={styles.Zoom}>
        <div>
          <img className={styles.OrnamentTop} src="ornament.png" alt="" />
          <p className={styles.Title}> {this.props.document.title}</p>
          <p className={styles.a}> {this.props.document.author}</p>
          <img className={styles.OrnamentBottom} src="ornament.png" alt="" />
        </div>
      </div>
    );
  }
}
