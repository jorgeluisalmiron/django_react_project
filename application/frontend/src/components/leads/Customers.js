import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCustomers, deleteCustomer } from '../../actions/customers';

export class Customers extends Component {

    static propTypes = {
        customers: PropTypes.array.isRequired,
        getCustomers: PropTypes.func.isRequired,
        deleteCustomer: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getCustomers();
    }

    render() {
        return (
            <Fragment>
                <h2>Customers</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.customers.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={this.props.deleteCustomer.bind(this, item.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customers.customers

});

export default connect(mapStateToProps, {
    getCustomers,
    deleteCustomer
})(Customers);
