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
                <h3>Advanced usage</h3>
                <h5>Formatting</h5>
                <SmallGrid
                    rows={this.state.rows}
                    cols={[
                        {'key': 'rating',       'name': 'Rating', 'format': this.formatPercentage},
                        {'key': 'name',         'name': 'Title'},
                        {'key': 'artist.name',  'name': 'Artist'},
                        {'key': 'album.name',   'name': 'Album'},
                        {'key': 'track_number', 'name': 'Track'},
                    ]}
                />
            </div>
        </div>;
    }

    formatPercentage(v) {
        return Math.round(v * 100) + '%';
    }
}

ReactDOM.render(<MyComponent />, document.body);
