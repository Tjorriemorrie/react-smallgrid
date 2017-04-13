import React from 'react';

import SmallGrid from './../../src/smallgrid.jsx'


const Nested = (props) => {

    return <div className="row">
        <h3>Nested Objects</h3>
        <h6><a href="#back" onClick={e => props.onBack(null)}>Back</a></h6>
        <SmallGrid
            rows={props.rows}
            cols={[
                {'key': 'rating',       'name': 'Rating'},
                {'key': 'name',         'name': 'Title'},
                {'key': 'artist.name',  'name': 'Artist'},
                {'key': 'album.name',   'name': 'Album'},
                {'key': 'track_number', 'name': 'Track'},
            ]}
        />
    </div>
}

export default Nested