import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                કેયોના જ્ઞાનસાગર 
                </h1>
                <p className="lead">
                કેયોના જ્ઞાનસાગર માં સત્સંગ ના પ્રસંગો લખો કે વાંચો.
                </p>
                <hr />
                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                રેજિસ્ટર 
                </Link>
                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                લોગીન 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(Landing);
