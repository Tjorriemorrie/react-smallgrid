'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NotWorking from './../build/notworking.js';


class MustWork extends React.Component {

    render() {
        console.info('mustwork');
        console.info(NotWorking);
        return <div>
            must work ffs
            <NotWorking />
        </div>;
    }
}

ReactDOM.render(<MustWork />, document.getElementById('kitchen_sink'));
