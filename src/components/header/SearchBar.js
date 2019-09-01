import React, { Component } from "react";
import "./Header.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class SearchBar extends Component {
  render() {
    return (
      <Form inline className="Search-Padding">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    );
  }
}
export default SearchBar;
