import React, { Component } from "react";
import "./DocumentPage.css";
import "../../App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class DocumentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      text: props.text
    };
  }
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>{this.props.title}</h1>
          <br />
          <p className="Text">{this.props.text}</p>
        </Container>
      </Jumbotron>
    );
  }
}
export default DocumentPage;
