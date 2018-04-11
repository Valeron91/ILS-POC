import * as React from "react";


export default class RetailerItem extends React.PureComponent {
    render() {
        return (
            <div className="retailer" onClick={() => this.props.selectRetailer(this.props.retailer)}>
                <img src={this.props.retailer.logo.thumb}/>
            </div>
        )
    }
}