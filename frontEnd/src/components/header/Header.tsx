import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";
import styles from "./Header.module.scss";
import { BrowserRouter, Link, Route } from "react-router-dom";

export default class Header extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="White" className="flex-column" id={styles.headerbckgd}>
        <Nav className="mr-auto">
          <Link to={"/"}>
            <Image
              src="lms.png"
              className={styles.logo}
              alt="BiblioFile logo"
            />
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="mr-auto">
          <SearchBar />
          <FilterDropdown />
          <SortDropdown setDocuments={this.props.setDocuments} />
        </Nav>
      </Navbar>
    );
  }
}
