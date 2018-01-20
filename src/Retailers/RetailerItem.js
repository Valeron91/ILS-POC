import * as React from "react";


export default class RetailerItem extends React.Component {
    render() {
        return (
            <div className="retailer" onClick={() => this.props.selectRetailer(this.props.retailer)}>
                <img src={this.props.retailer.logo.thumb}/>
                <span>{this.props.retailer.name}</span>
            </div>
        )
    }
}