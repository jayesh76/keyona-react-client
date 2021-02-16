import React, { Component, useState } from "react";
import { getBookContent } from "../../actions/bookActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { CLink, CButton, CTextarea } from '@coreui/react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'

class BookContent extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      shlok: "",
      event: "",
      errors: {}
    };
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      shlok,
      event
    } = nextProps.bookContent;

    this.setState({
      id,
      shlok,
      event
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("componentDidMount: "+id);
    this.props.getBookContent(id, this.props.history);
  }

  
  render() {
    return (
      <div>
      <div className="book">
          <div className="container">
            <div className="row">
              
                <div className="col-md-10 m-auto">
                <h6 className="display-6 text-center">{this.state.bookName} - {this.state.bookEdition} </h6>
               <hr/>
                </div>
                </div>
                
               
                  <div className="row">
                <div className="col-md-2 m-auto">
                <label className="display-6 text-left">Page Number: </label>
                </div>
              <div className="col-md-4 m-auto">
              <label className="display-6 text-left">{this.state.pageNumber}</label>

                  </div>
                  <div className="col-md-2 m-auto">
                <label className="display-6 text-left">Sandarbh: </label>
                </div>
              <div className="col-md-4 m-auto">
             
              <label className="display-6 text-left">{this.state.reference}</label>

                  </div></div>
                  <div className="row">
                  <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">Subject (Vishay): </label>
                  </div>
                <div className="col-md-4 m-auto">
                <label className="display-6 text-left">{this.state.subject}</label>

                </div>
                <div className="col-md-2 m-auto">
                <label className="display-6 text-left">Prasang Date: </label>
                </div>
                <div className="col-md-4 m-auto">
                <label className="display-6 text-left">{this.state.eventDate}</label>

                </div>
              </div>
              <div className="row">
                <div className="col-md-2 m-auto">
                <label className="display-6 text-left">Patra (Character): </label>
                </div>
              <div className="col-md-4 m-auto">
              <label className="display-6 text-left">{this.state.actor}</label>

              
              </div>
              <div className="col-md-2 m-auto">
              <label className="display-6 text-left">Gaam (Village): </label>
              </div>
              <div className="col-md-4 m-auto">
              <label className="display-6 text-left">{this.state.village}</label>

              
              </div>
              </div>
              <div className="row">
              <div className="col-md-2 m-auto">
              <label className="display-6 text-left">Birth Date: </label>
              </div>
            <div className="col-md-4 m-auto">
            <label className="display-6 text-left">{this.state.birthDate}</label>
            </div>
            <div className="col-md-2 m-auto">
            <label className="display-6 text-left">Death Date: </label>
            </div>
            <div className="col-md-4 m-auto">
            <label className="display-6 text-left">{this.state.deathDate}</label>

           
            </div>
            </div>
              <div className="row">
                <div className="col-md-2 m-auto">
                <label className="display-8 text-center">Shlok:</label>
                </div>
              <div className="col-md-10 m-auto">
                  <CTextarea 
                    name="textarea-input" 
                    id="textarea-input" 
                    rows="3"
                    value={this.state.shlok} />
                    
                    
                 </div></div>
                 <div className="row">
                <div className="col-md-2 m-auto">
                <label className="display-8 text-center">Prasang (Event):</label>
                </div>
              <div className="col-md-10 m-auto">
                 
              <CTextarea 
                  name="textarea-input" 
                  id="textarea-input" 
                  rows="10"
                  value={this.state.event} />
                    
                 </div></div>

                 
            
                  
              </div>
            </div>
            <div className="row">
             <div className="col-md-2 m-auto">
             
                    <CLink 
                        href={`/dashboard`}
                        rel="noreferrer noopener" 
                        className="card-header-action"  >
                        <CButton block className=".btn-ghost-button" size="sm" color="info">Close</CButton>
                      </CLink>
            
                </div></div>
                </div>
    )
  }
}

BookContent.propTypes = {
  getBookContent: PropTypes.func.isRequired,
  bookContent: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  bookContent: state.book.bookContent,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getBookContent }
)(BookContent);
