import React, { Component } from "react";
import BookItem from "./Book/BookItem";
import CreateBookButton from "./Book/CreateBookButton";
import { connect } from "react-redux";
import { getBooks } from "../actions/bookActions";
import PropTypes from "prop-types";
import {
  CLink,
  CButton,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
  } from '@coreui/react'
class Library extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  onDeleteClick = id => {
    this.props.deleteBook(id);
  };

  render() {
    const { books } = this.props.book;

    return (
      <div className="books">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="display-6 text-center">લાયબ્રેરી</h3>
              <br />
             
      <CRow>
      <CCol>
          <CCard>
            <CCardHeader>
            સત્સંગના પુસ્તકો અને પ્રસંગોની લાયબ્રેરી 
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={books}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'id':
                  (item)=>(
                    <td>
                      <CLink 
                        href={`/viewBook/${item.id}`}
                        rel="noreferrer noopener" 
                        className="card-header-action"  >
                        <CButton block className=".btn-ghost-button" size="sm" color="success">View</CButton>
                        </CLink>
                      <CLink 
                        href={`/updateBook/${item.id}`}
                        rel="noreferrer noopener" 
                        className="card-header-action"  >
                        <CButton block  className=".btn-ghost-button" size="sm" color="warning">Edit</CButton>

                      </CLink>
                      <CLink 
                      onClick={this.onDeleteClick.bind(
                        this,
                        item.id
                      )}
                        rel="noreferrer noopener" 
                        className="card-header-action"  >
                        <CButton block className=".btn-ghost-button" size="sm" color="danger">Delete</CButton>
                      </CLink>
         
            
                    </td>
                    
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const fields = ['bookName', 'bookEdition', 'pageNumber', 'subject', 'subSubject', 'reference', 'actor', 'village', 'id'];

Library.propTypes = {
  book: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  book: state.book
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Library);
