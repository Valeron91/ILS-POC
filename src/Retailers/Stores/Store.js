import React from 'react';

export default class Store extends React.Component {
    render() {
        return (
            <div className="info-store">
                <h2>City: <span>{this.props.store.city}</span></h2>
                {
                    this.props.store.opening_hours_text &&
                    <h5>Opening Hours: <span>{this.props.store.opening_hours_text}</span></h5>
                }

                {
                    this.props.store.phone &&
                    <h5>Telephone: <span>{this.props.store.phone}</span></h5>

                }
                <h5>Address: <span>{this.props.store.address}</span> - <span>{this.props.store.zipcode}</span></h5>
                <hr/>
            </div>
        );
    }
}
