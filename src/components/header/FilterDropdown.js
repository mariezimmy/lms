import React, { Component } from "react";
import "./Header.css";
import NavDropdown from "react-bootstrap/NavDropdown";
//import Button from "react-bootstrap/Button";

class FilterDropdown extends Component {
  render() {
    return (
      <NavDropdown
        className="Dropdown-Padding"
        title="Filter"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    );
  }
}
export default FilterDropdown;
