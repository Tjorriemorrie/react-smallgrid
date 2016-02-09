import React from 'react';
import ReactDOM from 'react-dom';
import NotWorking from './../build/notworking.js';


class MustWork extends React.Component {

    render() {
        console.info('mustwork');
        return <div>
            must work
            <NotWorking />
        </div>;
    }
}

ReactDOM.render(<MustWork />, document.getElementById('kitchen_sink'));
