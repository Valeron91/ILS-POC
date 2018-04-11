import React from 'react';
import Button from 'material-ui/Button';

export default class CloseButton extends React.PureComponent {

    render() {
        return (
                <Button className="close-button"
                    onClick={this.props.onClick}
                    size="small"
                    variant="raised">
                    Close List
                </Button>
        );
    }
}