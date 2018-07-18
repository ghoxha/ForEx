import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
//import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCryptoCurrency } from "../../actions/portfolioActions";
class AddCryptoCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      cryptoType: "",
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

    const crypData = {
      amount: this.state.amount,
      cryptoType: this.state.cryptoType
    };

    this.props.addCryptoCurrency(crypData, this.props.history);
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="add-crypto-currency">
        <div className="container">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Crypto Currency</h1>
            <p className="lead text-center">
              Add amount and type of crypto currency (BTC, LTC, ETH )
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
                name="cryptoType"
                value={this.state.cryptoType}
                onChange={this.onChange}
                error={errors.cryptoType}
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
AddCryptoCurrency.propTypes = {
  addCryptoCurrency: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  portfolio: state.portfolio,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addCryptoCurrency }
)(withRouter(AddCryptoCurrency));
