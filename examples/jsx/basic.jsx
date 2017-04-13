import React from 'react'

import SmallGrid from './../../src/smallgrid.jsx'


const Basic = (props) => {
    return <div className="row">
        <h3>Basic usage</h3>
        <h6><a href="#back" onClick={e => props.onBack(null)}>Back</a></h6>
        <SmallGrid
            rows={props.rows}
            cols={[
                {'key': 'rating'},
                {'key': 'name'},
                {'key': 'track_number'}
            ]}
        />
        <p><a href="#back" onClick={e => props.onBack(null)}>Back</a></p>
    </div>
}

export default Basic