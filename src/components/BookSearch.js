import React, { Component } from 'react';
import Button from './Button';
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: 'React Two',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 2
  }
];

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm: ''
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, list } = this.state;

    return (
      <div>
        <br />
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Find Stuff
        </Search>
        <br />
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children} <input type="text" value={value} onChange={onChange} />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;

    return (
      <div>
        {list.filter(isSearched(pattern)).map(item => (
          <div key={item.objectID}>
            <span href={item.url}>{item.title}</span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>
                <em>Dismiss</em>
              </Button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default BookSearch;
