import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
//import Button from "react-bootstrap/Button";

class SortDropdown extends Component {
  sortByDateNewestToOldest() {
    return;
  }

  sortByDateOldestToNewest() {
    return;
  }

  sortByTitle() {
    return;
  }

  render() {
    return (
      <NavDropdown title="Sort" id="basic-nav-dropdown">
        <NavDropdown.Item
          onclick={this.sortByDateNewestToOldest()}
          href="#sort/newest-oldest"
        >
          Date (newest - oldest)
        </NavDropdown.Item>
        <NavDropdown.Item
          onclick={this.sortByDateOldestToNewest()}
          href="#sort/oldest-newest"
        >
          Date (oldest - newest)
        </NavDropdown.Item>
        <NavDropdown.Item onclick={this.sortByTitle()} href="#sort/title">
          Title (A - Z)
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
}
export default SortDropdown;
