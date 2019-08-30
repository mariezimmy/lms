import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import DocumentPreview from "./components/DocumentPreview";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Link, Route } from "react-router-dom";
import DocumentPage from "./components/DocumentPage";

class App extends Component {
  setDocumentPreviewState(title, author) {
    return <DocumentPreview title={title} author={author} />;
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path={"/ToTheSame"}
          render={() => (
            <div>
              <Header />
              <div className="App">
                <DocumentPage />
              </div>
            </div>
          )}
        />
        <Route
          exact
          path={"/"}
          render={() => (
            <div>
              <Header />
              <div className="App">
                <br />
                <Container className="App-documents">
                  <Row>
                    <Col>
                      <Link to={"/ToTheSame"}>
                        {this.setDocumentPreviewState(
                          "To the same.",
                          "John Donne"
                        )}
                      </Link>
                    </Col>

                    <Col>
                      {this.setDocumentPreviewState(
                        "To Sir H.G.",
                        "John Donne"
                      )}
                    </Col>

                    <Col>
                      {this.setDocumentPreviewState(
                        "To Sir G.F.",
                        "John Donne"
                      )}
                    </Col>
                  </Row>
                  <br />
                  <br />
                  <Row>
                    <Col>
                      {this.setDocumentPreviewState(
                        "To Sir Thomas Roe.",
                        "John Donne"
                      )}
                    </Col>

                    <Col>
                      {this.setDocumentPreviewState(
                        "To Mr. George Garet.",
                        "John Donne"
                      )}
                    </Col>

                    <Col>
                      {this.setDocumentPreviewState(
                        "To Mrs Martha Garet.",
                        "John Donne"
                      )}
                    </Col>
                  </Row>
                </Container>
                <header className="App-body" />
              </div>
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}
export default App;
