import React from 'react'
import ReactDOM from 'react-dom'
require('bootstrap/dist/css/bootstrap.css')
require('bootstrap/dist/css/bootstrap-theme.css')

import data from './../tests/fixture.js'
import Basic from './jsx/basic.jsx'
import Headings from './jsx/headings.jsx'
import Nested from './jsx/nested.jsx'
import Formatting from './jsx/formatting.jsx'
import Editing from './jsx/editing.jsx'


class Examples extends React.Component {

    constructor() {
        super()
        this.state = {
            'page': null,
            'data': data,
        }
    }

    render() {
        const {page, data} = this.state
        let body = null
        if (page == 'basic') {
            body = <Basic rows={data} onBack={p => this.setPage(p)}/>
        } else if (page == 'headings') {
            body = <Headings rows={data} onBack={p => this.setPage(p)}/>
        } else if (page == 'nested') {
            body = <Nested rows={data} onBack={p => this.setPage(p)}/>
        } else if (page == 'formatting') {
            body = <Formatting rows={data} onBack={p => this.setPage(p)}/>
        } else if (page == 'editing') {
            body = <Editing rows={data} onBack={p => this.setPage(p)}/>
        } else {
            body = <ol>
                <li><a href="#basic" onClick={e => this.setPage('basic')}>Basic</a></li>
                <li><a href="#headings" onClick={e => this.setPage('headings')}>Headings</a></li>
                <li><a href="#nested" onClick={e => this.setPage('nested')}>Nested objects</a></li>
                <li><a href="#formatting" onClick={e => this.setPage('formatting')}>Formatting</a></li>
                <li><a href="#editing" onClick={e => this.setPage('editing')}>Editing</a></li>
            </ol>
        }

        return <div className="container">
            <h6>React-SmallGrid</h6>
            {body}
        </div>
    }

    setPage(page) {
        this.setState({
            'page': page
        })
    }
}

ReactDOM.render(<Examples />, document.body)
