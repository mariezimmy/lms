import React, { Component } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";

class Header extends Component {
  render() {
    return (
      <Navbar bg="White" className="flex-column">
        <Nav className="mr-auto">
          <Image src="bibliofile.png" className="Logo" alt="BiblioFile logo" />
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="mr-auto ">
          <SearchBar />
          <FilterDropdown />
          <SortDropdown />
        </Nav>
      </Navbar>
    );
  }
}
export default Header;
