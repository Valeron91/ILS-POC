import React from 'react';
import Store from './Store';

export default class StoresList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: []
        }
    }


    componentDidMount() {
        fetch('http://api.ilikesales.co.uk/v2/retailers/' + this.props.retailer.id + '/stores')
            .then(response => response.json())
            .then((responsejson) => {
                this.setState({
                    stores: responsejson
                });
            });


    }

    render() {
        if (this.state.stores.length < 1) return false;

        const list = this.state.stores.map(store => <Store key={store.id} store={store}/>);

        return (
            <div>
                {list}
            </div>
        );
    }
}
