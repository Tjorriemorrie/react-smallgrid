import React from 'react';

import SmallGrid from './../../src/smallgrid.jsx'


const Editing = (props) => {

	const onEdit = (row, key, val) => {
		console.info('Row: ', row);
		console.info('Key: ', key);
		console.info('Val: ', val);
		// todo for you: send update to backend
	}

    return <div className="row">
        <h3>Editing</h3>
        <h6><a href="#back" onClick={e => props.onBack(null)}>Back</a></h6>
        <SmallGrid
            rows={props.rows}
            cols={[
                {'key': 'rating',       'name': 'Rating'},
                {'key': 'name',         'name': 'Title',  'edit': onEdit},
                {'key': 'artist.name',  'name': 'Artist', 'edit': onEdit},
                {'key': 'album.name',   'name': 'Album'},
                {'key': 'track_number', 'name': 'Track'}
            ]}
        />
    </div>

}

export default Editing