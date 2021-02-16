import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteBook } from "../../actions/bookActions";

class BookItem extends Component {
  onDeleteClick = id => {
    this.props.deleteBook(id);
  };

  render() {
    const { book } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{book.id}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{book.bookName}</h3>
              <p>{book.subject}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> Book Board </i>
                  </li>
                </a>
                <Link to={`/updateBook/${book.id}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> Update Book Info</i>
                  </li>
                </Link>

                <li
                  className="list-group-item delete"
                  onClick={this.onDeleteClick.bind(
                    this,
                    book.id
                  )}
                >
                  <i className="fa fa-minus-circle pr-1"> Delete Book</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookItem.propTypes = {
  deleteBook: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteBook }
)(BookItem);
