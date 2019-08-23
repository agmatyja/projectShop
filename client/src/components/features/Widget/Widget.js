import React from 'react';
import './Widget.scss';
import { PropTypes } from 'prop-types';

class Widget extends React.Component {

  render() {
  	const { sort, sortProducts  } = this.props; 
    return (
      <nav className="widget">
        <p>Sort by:</p>
        <p className={"sort " + (sort === "TITLE_ASC" ? "active" : "")} onClick={() => { sortProducts("TITLE_ASC")}} ><a>Title A-Z</a></p>
        <p className={"sort " + (sort === "TITLE_DESC" ? "active" : "")} onClick={() => { sortProducts("TITLE_DESC")}} ><a>Title Z-A</a></p>
        <p className={"sort " + (sort === "AUTHOR_ASC" ? "active" : "")} onClick={() => { sortProducts("AUTHOR_ASC")}} ><a>Author A-Z</a></p>
        <p className={"sort " + (sort === "AUTHOR_DESC Z-A" ? "active" : "")} onClick={() => { sortProducts("AUTHOR_DESC")}} ><a>Author Z-A</a></p>
        <p className={"sort " + (sort === "PRICE_ASC" ? "active" : "")} onClick={() => { sortProducts("PRICE_ASC")}} ><a>Price ascending</a></p>
        <p className={"sort " + (sort === "PRICE_DESC" ? "active" : "")} onClick={() => { sortProducts("PRICE_DESC")}} ><a>Price descending</a></p>
      </nav>
    );
  };
}; 


Widget.propTypes = {
  sort: PropTypes.string.isRequired,
  sortProducts: PropTypes.func.isRequired,
};

export default Widget;