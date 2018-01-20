import React from 'react';

export default class Store extends React.Component {
    render() {
        return (
            <div className="info-store">
                <h2>City: {this.props.store.city}</h2>
                {
                    this.props.store.opening_hours_text &&
                    <h4>Opening Hours: {this.props.store.opening_hours_text}</h4>
                }

                {
                    this.props.store.phone &&
                    <span>{this.props.store.phone}</span>

                }
                <h5>Address: {this.props.store.address} - {this.props.store.zipcode}</h5>
                <hr/>
            </div>
        );
    }
}
