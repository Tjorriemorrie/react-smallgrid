import React from 'react';
import ReactDOM from 'react-dom';
import SmallGrid from './../smallgrid.jsx';

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rows: data};
    }

    render() {
        return <div className="container">
            <div className="row">
                <h3>Basic usage</h3>
                <h5>Minimal</h5>
                <SmallGrid
                    rows={this.state.rows}
                    cols={[
                        {'key': 'rating'},
                        {'key': 'name'},
                        {'key': 'track_number'}
                    ]}
                />
            </div>
        </div>;
    }
}

ReactDOM.render(<MyComponent />, document.body);
