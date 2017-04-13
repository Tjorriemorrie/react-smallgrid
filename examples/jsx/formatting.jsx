import React from 'react';

import SmallGrid from './../../src/smallgrid.jsx'


const Formatting = (props) => {

    const formatPercentage = (v) => {
        return Math.round(v * 100) + '%'
    }

    return <div className="row">
        <h3>Formatting</h3>
        <h6><a href="#back" onClick={e => props.onBack(null)}>Back</a></h6>
        <SmallGrid
            rows={props.rows}
            cols={[
                {'key': 'rating',       'name': 'Rating', 'format': formatPercentage},
                {'key': 'name',         'name': 'Title'},
                {'key': 'artist.name',  'name': 'Artist'},
                {'key': 'album.name',   'name': 'Album'},
                {'key': 'track_number', 'name': 'Track'},
            ]}
        />
    </div>
}

export default Formatting