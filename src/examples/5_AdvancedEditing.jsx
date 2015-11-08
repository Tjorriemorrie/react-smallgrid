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
                <h5>Editing</h5>
                <SmallGrid
                    rows={this.state.rows}
                    cols={[
                        {'key': 'rating',       'name': 'Rating'},
                        {'key': 'name',         'name': 'Title',  'edit': this.onEdit},
                        {'key': 'artist.name',  'name': 'Artist', 'edit': this.onEdit},
                        {'key': 'album.name',   'name': 'Album'},
                        {'key': 'track_number', 'name': 'Track'}
                    ]}
                />
            </div>
        </div>;
    }

	onEdit(row, key, val) {
		console.info('Row: ', row);
		console.info('Key: ', key);
		console.info('Val: ', val);
		// send update to backend
	}
}

ReactDOM.render(<MyComponent />, document.body);
