import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styles from "./SearchBar.module.scss";

interface ISearchBarState {
  query: string;
}

interface ISearchBarProps {
  search: (query: string) => Promise<void>;
}


export default class SearchBar extends Component<ISearchBarProps, ISearchBarState> {

  constructor(props: any) {
    super(props);
    this.state = {
      query: ""
    };
  }

  render() {
    return (
      <Form inline className={styles.searchPadding}>
        <FormControl
          type="query"
          placeholder="Search by title, etc."
          className={styles.searchBar}
          onChange={(event) => this.setState({ query: event.target.value })}
        />
        <Button variant="outline-info" className={styles.SearchButton} onClick={() => { this.props.search(this.state.query) }}
          href={"#search/" + this.state.query}>
          Search
        </Button>
      </Form>
    );
  }
}
