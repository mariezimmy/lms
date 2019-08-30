import React, { Component } from "react";
import "./DocumentPreview.css";
import Card from "react-bootstrap/Card";

class DocumentPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      author: null,
      date: null,
      url: null,
      image: null,
      onScreen: true,
      metadata: null
    };
  }
  render() {
    return (
      <Card style={{ width: "16rem" }} className="Zoom Title">
        <Card.Title className="Title">
          {this.props.title}
          <Card.Subtitle className="Title">{this.props.author}</Card.Subtitle>
        </Card.Title>
        <Card.Img className="Title" variant="top" src="ToTheSame.png" />
      </Card>
    );
  }
}
export default DocumentPreview;
