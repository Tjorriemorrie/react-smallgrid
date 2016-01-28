import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import SmallGrid from './../build/smallgrid.js';


class KitchenSink extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rows: data};
    }

    render() {
        console.info('[KitchenSink] render');
        return <div className="container">
            <div className="row">
                <h3>Basic usage</h3>
                <h5>Minimal</h5>

                {console.info('delete this tag and the rendering works')}
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

ReactDOM.render(<KitchenSink />, document.getElementById('kitchen_sink'));
