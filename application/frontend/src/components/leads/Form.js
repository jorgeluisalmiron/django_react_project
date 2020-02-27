import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCustomer } from "../../actions/customers";

export class Form extends Component {
    state = {
        first_name: "",
        last_name: "",
        company_name: "",
        ident_type: "",
        ident_number: "",
        email: "",
        street: "",
        city: "",
        country: "",
        state: "",
        zip: "",
        mobile: "",
        alt_phone: "",
        comments: ""
    };

    static propTypes = {
        addCustomer: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { first_name, last_name, company_name, ident_type, ident_number, email, street, city, country, state, zip, mobile, alt_phone, comments } = this.state;
        const customer = { first_name, last_name, company_name, ident_type, ident_number, email, street, city, country, state, zip, mobile, alt_phone, comments };
        this.props.addCustomer(customer);
        this.setState({
            first_name: "",
            last_name: "",
            company_name: "",
            ident_type: "",
            ident_number: "",
            email: "",
            street: "",
            city: "",
            country: "",
            state: "",
            zip: "",
            mobile: "",
            alt_phone: "",
            comments: ""
        });
    };

    render() {
        const { first_name, last_name, company_name, ident_type, ident_number, email, street, city, country, state, zip, mobile, alt_phone, comments } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="first_name"
                            onChange={this.onChange}
                            value={first_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="last_name"
                            onChange={this.onChange}
                            value={last_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="company_name"
                            onChange={this.onChange}
                            value={company_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Identity Type</label>
                        <input
                            className="form-control"
                            type="text"
                            name="ident_type"
                            onChange={this.onChange}
                            value={ident_type}
                        />
                    </div>
                    <div className="form-group">
                        <label>Identity Number</label>
                        <input
                            className="form-control"
                            type="text"
                            name="ident_number"
                            onChange={this.onChange}
                            value={ident_number}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
            </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { addCustomer }
)(Form);