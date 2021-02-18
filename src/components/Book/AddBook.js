import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBook } from "../../actions/bookActions";
import classnames from "classnames";

class AddBook extends Component {
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
      author: "",
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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newBook = {
      bookName: this.state.bookName,
      bookEdition: this.state.bookEdition,
      pageNumber: this.state.pageNumber,
      subject: this.state.subject,
      subSubject: this.state.subSubject,
      shlok: this.state.shlok,
      event: this.state.event,
      reference: this.state.reference,
      actor: this.state.actor,
      author: this.state.author,
      village: this.state.village,
      eventDate: this.state.eventDate,
      birthDate: this.state.birthDate,
      deathDate: this.state.deathDate,
      eventDateGuj: this.state.eventDateGuj,
      birthDateGuj: this.state.birthDateGuj,
      deathDateGuj: this.state.deathDateGuj,
      comments: this.state.comments
    };
    this.props.createBook(newBook, this.state.button, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="book">
          <div className="container">
            <div className="row">

              <div className="col-md-10 m-auto">
                <h4 className="display-6 text-center">નવું પુસ્તક</h4>
                <hr />
              </div>
            </div>

            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પુસ્તકનું નામ: <span className="asterisk">*</span></label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.bookName
                      })}
                      placeholder="પુસ્તકનું નામ "
                      name="bookName"
                      value={this.state.bookName}
                      onChange={this.onChange}
                    />
                    {errors.bookName && (
                      <div className="invalid-feedback">
                        {errors.bookName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પુસ્તકની આવૃત્તિ: <span className="asterisk">*</span></label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.bookEdition
                      })}
                      placeholder="પુસ્તકની આવૃત્તિ"
                      name="bookEdition"
                      value={this.state.bookEdition}
                      onChange={this.onChange}
                    />
                    {errors.bookEdition && (
                      <div className="invalid-feedback">
                        {errors.bookEdition}
                      </div>
                    )}
                  </div>
                </div></div>
              <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પાના નંબર: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.pageNumber
                      })}
                      placeholder="પાના નંબર"
                      name="pageNumber"
                      value={this.state.pageNumber}
                      onChange={this.onChange}
                    />
                    {errors.pageNumber && (
                      <div className="invalid-feedback">
                        {errors.pageNumber}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">લેખક: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.author
                      })}
                      placeholder="લેખક"
                      name="author"
                      value={this.state.author}
                      onChange={this.onChange}
                    />
                    {errors.author && (
                      <div className="invalid-feedback">
                        {errors.author}
                      </div>
                    )}
                  </div>

                </div></div>
                <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-8 text-center">સંદર્ભ: </label>
                </div>
                <div className="col-md-10 m-auto">
                  <div className="form-group">
                  <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.reference
                  })}
                  placeholder="સંદર્ભ"
                  name="reference"
                  value={this.state.reference}
                  onChange={this.onChange}
                  />
                    {errors.reference && (
                      <div className="invalid-feedback">
                        {errors.reference}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">મુખ્ય વિષય: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.subject
                      })}
                      placeholder="મુખ્ય વિષય"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.onChange}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">
                        {errors.subject}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પેટા વિષય: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.subSubject
                      })}
                      placeholder="પેટા વિષય"
                      name="subSubject"
                      value={this.state.subSubject}
                      onChange={this.onChange}
                    />
                    {errors.subSubject && (
                      <div className="invalid-feedback">
                        {errors.subSubject}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પ્રસંગની તારીખ: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="eventDate"
                      value={this.state.eventDate}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પ્રસંગની ગુજરાતી તારીખ: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.eventDateGuj
                      })}
                      placeholder="પ્રસંગની ગુજરાતી તારીખ"
                      name="eventDateGuj"
                      value={this.state.eventDateGuj}
                      onChange={this.onChange}
                    />
                    {errors.eventDateGuj && (
                      <div className="invalid-feedback">
                        {errors.eventDateGuj}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-8 text-center">શ્લોક / સાખી: </label>
                </div>
                <div className="col-md-10 m-auto">
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.shlok
                      })}
                      placeholder="શ્લોક / સાખી"
                      name="shlok"
                      value={this.state.shlok}
                      onChange={this.onChange}
                    />
                    {errors.shlok && (
                      <div className="invalid-feedback">
                        {errors.shlok}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-8 text-center">પ્રસંગ:</label>
                </div>
                <div className="col-md-10 m-auto">
                  <div className="form-group">
                    <textarea rows="4"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.event
                      })}
                      placeholder="પ્રસંગ"
                      name="event"
                      value={this.state.event}
                      onChange={this.onChange}
                    />
                    {errors.event && (
                      <div className="invalid-feedback">
                        {errors.event}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-2 m-auto">
                <label className="display-8 text-center">વિશેષ નોંધ: </label>
              </div>
              <div className="col-md-10 m-auto">
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.comments
                    })}
                    placeholder="વિશેષ નોંધ"
                    name="comments"
                    value={this.state.comments}
                    onChange={this.onChange}
                  />
                  {errors.comments && (
                    <div className="invalid-feedback">
                      {errors.comments}
                    </div>
                  )}
                </div>
              </div>
            </div>
              <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પાત્રનું નામ: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.actor
                      })}
                      placeholder="પાત્રનું નામ"
                      name="actor"
                      value={this.state.actor}
                      onChange={this.onChange}
                    />
                    {errors.actor && (
                      <div className="invalid-feedback">
                        {errors.actor}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પાત્રનું ગામ: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.village
                      })}
                      placeholder="પાત્રનું ગામ"
                      name="village"
                      value={this.state.village}
                      onChange={this.onChange}
                    />
                    {errors.village && (
                      <div className="invalid-feedback">
                        {errors.village}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પાત્રની જન્મ તારીખ: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="birthDate"
                      value={this.state.birthDate}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પાત્રની ગુજરાતી જન્મ તારીખ: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.birthDateGuj
                      })}
                      placeholder="પાત્રની ગુજરાતી જન્મ તારીખ"
                      name="birthDateGuj"
                      value={this.state.birthDateGuj}
                      onChange={this.onChange}
                    />
                    {errors.birthDateGuj && (
                      <div className="invalid-feedback">
                        {errors.birthDateGuj}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પાત્રની મૃત્યુ તારીખ: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="deathDate"
                      value={this.state.deathDate}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-md-2 m-auto">
                  <label className="display-6 text-left">પાત્રની ગુજરાતી મૃત્યુ તારીખ: </label>
                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.deathDateGuj
                      })}
                      placeholder="પાત્રની ગુજરાતી મૃત્યુ તારીખ"
                      name="deathDateGuj"
                      value={this.state.deathDateGuj}
                      onChange={this.onChange}
                    />
                    {errors.deathDateGuj && (
                      <div className="invalid-feedback">
                        {errors.deathDateGuj}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">

                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <button
                      type="submit" onClick={this.onChange} value="continue" name="button"
                      className="btn btn-primary btn-block mt-4">ડેટા સેવ અને ચાલુ રાખો</button>
                  </div>

                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <button
                      type="submit" onClick={this.onChange} value="close" name="button"
                      className="btn btn-primary btn-block mt-4" >ડેટા સેવ અને બંધ કરો</button>
                  </div>

                </div>
                <div className="col-md-4 m-auto">
                  <div className="form-group">
                    <button
                      type="submit" onClick={this.onChange} value="back" name="button"
                      className="btn btn-primary btn-block mt-4">પાછળ  જવા</button>
                  </div>

                </div></div>


            </form>
          </div>
        </div>
      </div>


    );
  }
}

AddBook.propTypes = {
  createBook: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createBook }
)(AddBook);
