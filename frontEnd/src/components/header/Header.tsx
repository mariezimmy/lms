import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import SortBy from "../../model/SortBy";

interface IHeaderProps {
  sort: (sortBy: SortBy) => Promise<void>;
  search: (query: string) => Promise<void>;
  filter: (query: any) => Promise<void>;
  loadDocuments: () => Promise<void>;
}

export default class Header extends Component<IHeaderProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="White" className="flex-column" id={styles.headerbckgd}>
        <Nav className="mr-auto">
          <Link to={"/"}>
            <Image
              onClick={() => { this.props.loadDocuments() }}
              src="lms.png"
              className={styles.logo}
              alt="BiblioFile logo"
            />
          </Link>
          <Image
              src="donne-header.jpg"
              alt="John Donne"
              className={styles.donneHeader}
            />
        </Nav>

        <div className={styles.subheader}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="mr-auto">
            <SearchBar search={this.props.search} />
            <SortDropdown sort={this.props.sort} />
            <FilterDropdown filter={this.props.filter} />
            <div className={styles.about}>
              <Link to={"/about"} className={styles.a}>
                <p>About the Developers</p>
              </Link>
            </div>

          </Nav>
        </div>
      </Navbar>
    );
  }
}
