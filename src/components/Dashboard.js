import React, { Component, useState } from "react";
import BookItem from "./Book/BookItem";
import CreateBookButton from "./Book/CreateBookButton";
import { connect } from "react-redux";
import { getMyBooks, deleteBook } from "../actions/bookActions";
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
class Dashboard extends Component {
  componentDidMount() {
    this.props.getMyBooks();
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
              <h3 className="display-6 text-center">પુસ્તકો</h3>
              <br />
              <CreateBookButton name="નવું પુસ્તક +"/>
              <hr />
     
      <CRow>
      <CCol>
          <CCard>
            <CCardHeader>
            તમારા દ્વારા એન્ટ્રી કે સુધારેલા પુસ્તકો અને પ્રસંગોનું લીસ્ટ
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

Dashboard.propTypes = {
  book: PropTypes.object.isRequired,
  getMyBooks: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  book: state.book
});

export default connect(
  mapStateToProps,
  { getMyBooks, deleteBook }
)(Dashboard);