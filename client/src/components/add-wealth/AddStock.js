import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
//import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStock } from "../../actions/portfolioActions";
class AddStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      stockName: "",
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

    const stockData = {
      amount: this.state.amount,
      stockName: this.state.stockName
    };

    this.props.addStock(stockData, this.props.history);
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="add-stock">
        <div className="container">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Stock</h1>
            <p className="lead text-center">
              Add amount of stock and from where
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
                placeholder="* Stock Name"
                name="stockName"
                value={this.state.stockName}
                onChange={this.onChange}
                error={errors.stockName}
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
AddStock.propTypes = {
  addStock: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  portfolio: state.portfolio,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addStock }
)(withRouter(AddStock));
