import React, { Component, useState } from "react";
import { getBook } from "../../actions/bookActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import Collapses from "../Collapses";

import { CLink, CButton, CTextarea } from '@coreui/react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CRow 
} from '@coreui/react';

class ViewBook extends Component {
  //set state
  constructor() {
    super();

    this.state = {
      bookName: "",
      bookEdition: "",
      pageNumber: "",
      subject: "",
      subSubject: "",
      shlok: "",
      event: "",
      reference: "",
      actor: "",
      village: "",
      eventDate: "",
      birthDate: "",
      deathDate: "",
      eventDateGuj: "",
      birthDateGuj: "",
      deathDateGuj: "",
      comments: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      bookName,
      bookEdition,
      pageNumber,
      subject,
      subSubject,
      shlok,
      event,
      reference,
      actor,
      village,
      eventDate,
      birthDate,
      deathDate,
      eventDateGuj,
      birthDateGuj,
      deathDateGuj,
      comments
    } = nextProps.book;

    this.setState({
      id,
      bookName,
      bookEdition,
      pageNumber,
      subject,
      subSubject,
      shlok,
      event,
      reference,
      actor,
      village,
      eventDate,
      birthDate,
      deathDate,
      eventDateGuj,
      birthDateGuj,
      deathDateGuj,
      comments
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("ID: "+id);
    this.props.getBook(id, this.props.history);
  }
 
  render() {
   
      return (
        <Collapses bookName={this.state.bookName} 
        bookEdition={this.state.bookEdition}  pageNumber={this.state.pageNumber} 
        subject={this.state.subject} subSubject={this.state.subSubject}
        shlok={this.state.shlok} event={this.state.event} 
        comments={this.state.comments} reference={this.state.reference} 
        actor={this.state.actor} village={this.state.village}
        eventDate={this.state.eventDate} eventDateGuj={this.state.eventDateGuj} 
        birthDate={this.state.birthDate} birthDateGuj={this.state.birthDateGuj} 
        deathDate={this.state.deathDate} deathDateGuj={this.state.deathDateGuj} />

    );
  }
}


ViewBook.propTypes = {
  getBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  book: state.book.book,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getBook }
)(ViewBook);
