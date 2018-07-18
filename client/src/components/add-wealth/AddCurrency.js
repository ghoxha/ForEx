import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
//import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCurrency } from "../../actions/portfolioActions";
class AddCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currencyType: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const currData = {
      amount: this.state.amount,
      currencyType: this.state.currencyType
    };

    this.props.addCurrency(currData, this.props.history);
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="add-currency">
        <div className="container">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Currency</h1>
            <p className="lead text-center">
              Add amount and type of currency (USD, EUR, etc)
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="* Amount"
                name="amount"
                value={this.state.amount}
                onChange={this.onChange}
                error={errors.amount}
              />
              <TextFieldGroup
                placeholder="* Currency Type"
                name="currencyType"
                value={this.state.currencyType}
                onChange={this.onChange}
                error={errors.currencyType}
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
AddCurrency.propTypes = {
  addCurrency: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  portfolio: state.portfolio,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addCurrency }
)(withRouter(AddCurrency));
