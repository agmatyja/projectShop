import React from 'react';
import './Widget.scss';
import { PropTypes } from 'prop-types';

class Widget extends React.Component {

  render() {
  	const { sort, sortProducts  } = this.props; 
    return (
      <nav className="widget">
        <p>Sort by:</p>
        <p className={"sort " + (sort === "Title A-Z" ? "active" : "")} onClick={() => { sortProducts("Title A-Z")}} ><a>Title A-Z</a></p>
        <p className={"sort " + (sort === "Title Z-A" ? "active" : "")} onClick={() => { sortProducts("Title Z-A")}} ><a>Title Z-A</a></p>
        <p className={"sort " + (sort === "Author A-Z" ? "active" : "")} onClick={() => { sortProducts("Author A-Z")}} ><a>Author A-Z</a></p>
        <p className={"sort " + (sort === "Author Z-A" ? "active" : "")} onClick={() => { sortProducts("Author Z-A")}} ><a>Author Z-A</a></p>
        <p className={"sort " + (sort === "Price increasing" ? "active" : "")} onClick={() => { sortProducts("Price increasing")}} ><a>Price increasing</a></p>
        <p className={"sort " + (sort === "Price decreasing" ? "active" : "")} onClick={() => { sortProducts("Price decreasing")}} ><a>Price decreasing</a></p>
      </nav>
    );
  };
}; 


Widget.propTypes = {
  sort: PropTypes.string.isRequired,
  sortProducts: PropTypes.func.isRequired,
};

export default Widget;