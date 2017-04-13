import React from 'react';
import _ from 'lodash';
require('./smallgrid.less');


export default class SmallGrid extends React.Component{

    constructor(props) {
        console.info('[SmallGrid] constructor');
        super(props);
        this.state = {
            edit_idx: null,
            edit_prop: null,
            limit: 20,
            page: 1,
            total_pages: 1,
            sort_by: null,
            sort_dir: 'desc'
        };
    }

    componentWillMount() {
        console.info('[SmallGrid] componentWillMount');

        if (!_.has(this.props, 'rows')) {
            console.error('[SmallGrid] no rows attribute found');
            this.props.rows = [];
        }

        if (!_.has(this.props, 'cols')) {
            console.error('[SmallGrid] no cols attribute found');
            this.props.rows = [];
            this.props.cols = [];
        }

        if (!_.isArray(this.props.rows)) {
            console.error('[SmallGrid] rows prop is not an array');
            this.props.rows = [];
        }

        if (!_.isArray(this.props.cols)) {
            console.error('[SmallGrid] cols prop is not an array');
            this.props.rows = [];
            this.props.cols = [];
        }

        this.setTotalPages();
    }

    componentWillUpdate() {
        console.info('[SmallGrid] componentWillUpdate');
        this.setTotalPages();
    }

    setTotalPages() {
        let total_pages = Math.ceil(this.props.rows.length / this.state.limit);
        if (this.state.total_pages != total_pages) {
            console.info('[SmallGrid] setTotalPages: total_pages', total_pages);
            this.setState({total_pages: total_pages});
        }
    }

    formatDefault(v) {
        return v;
    }

    getCols() {
        let cols = _.map(this.props.cols, (col, col_i, cols) => {
            // key
            if (col.hasOwnProperty('key')) {
                // name
                if (!col.hasOwnProperty('name')) {
                    col.name = col.key;
                }
                // default not necessary to check
                // format
                if (!col.hasOwnProperty('format') || !_.isFunction(col.format)) {
                    col.format = this.formatDefault;
                }
                // edit
                if (!col.hasOwnProperty('edit') || !_.isFunction(col.edit)) {
                    col.edit = null;
                }
                return col;
            }
        });
        console.info('[SmallGrid] getCols', cols);
        return _.compact(cols);
    }

    getRows() {
        // always sort data first
        this.sortRows();

        // slice data by pagination
        let rows = this.props.rows.slice(this.getStart(), this.getEnd());

        console.info('[SmallGrid] getRows', rows);
        return rows;
    }

    getStart() {
        let start = (this.state.page - 1) * this.state.limit;
        //console.info('[SmallGrid] getStart', start, '(incl)');
        return start;
    }

    getEnd() {
        let end = this.state.page * this.state.limit;
        //console.info('[SmallGrid] getEnd', end, '(excl)');
        return end;
    }

    getCell(row_i, row, col_i, col) {
        //console.info('[SmallGrid] getCell', row_i, row, col_i, col);
        let val = col.format(_.get(row, col.key, col.default));

        if (this.state.edit_idx == row_i && this.state.edit_prop == col.key) {
            return <td key={col_i}>
                <form onSubmit={this.editValue.bind(this)}>
                    <input
                        type="text"
                        name={col.key}
                        defaultValue={val}
                        ref={(c) => this._input = c}
                        onKeyDown={this.onKeyDown.bind(this)}
                        data-row={row_i}
                        autoFocus
                    />
                </form>
            </td>;

        } else {
            if (col.edit) {
                return <td key={col_i} onClick={this.editCell.bind(this, row_i, col.key)} className="edit">{val}</td>;
            } else {
                return <td key={col_i}>{val}</td>;
            }
        }
    }

    getPages() {
        //console.info('[SmallGrid] getPages');
        let pages = [];
        for (let i=this.state.page-4; i<=this.state.page+4; i++) {
            if (i > 0 && i <= this.state.total_pages) {
                pages.push(i);
            }
        }
        console.info('[SmallGrid] getPages: pages', pages);
        return pages;
    }

    setPage(page) {
        //console.info('[SmallGrid] setPage', page);
        this.editExit();
        this.setState({page: page});
    }

    sortBy(col) {
        this.editExit();
        let s = {};

        if (this.state.sort_by == col) {

            if (this.state.sort_dir == 'desc') {
                s['sort_by'] = col;
                s['sort_dir'] = 'asc';
            } else {
                s['sort_by'] = null;
                s['sort_dir'] = 'desc';
            }

        } else {
            s['sort_by'] = col;
            s['sort_dir'] = 'desc';
        }

        this.setState(s);
        console.info('[SmallGrid] sortBy', s);
    }

    sortRows() {
        console.info('[SmallGrid] sortRows', this.state.sort_by, this.state.sort_dir);

        if (this.state.sort_by) {
            console.info('[SmallGrid] sortRows: sorting');
            this.props.rows.sort((a, b) => {
                let x = _.get(a, this.state.sort_by);
                let y = _.get(b, this.state.sort_by);
                if (this.state.sort_dir == 'desc') {
                    if (!x) {
                        return -1
                    } else if (!y) {
                        return 1
                    }
                    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
                } else {
                    if (!x) {
                        return -1
                    } else if (!y) {
                        return 1
                    }
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                }
            });

        } else {
            console.info('[SmallGrid] sortRows: nothing to sort by');
        }
    }

    render() {
        console.info('[SmallGrid] render');
        if (!this.props.hasOwnProperty('rows') || this.props.rows.length < 1) {
            return <div className="alert alert-default">no data</div>
        } else {

            let pages = this.getPages();
            let cols = this.getCols();
            let rows = this.getRows();

            return <section>
                <a name="library_table"/><br/>
                <table className="table table-condensed table-sort table-hl">

                    <thead>
                        <tr>
                            {_.map(cols, (col, col_i, cols) => {
                                return (
                                    <th key={col_i} onClick={this.sortBy.bind(this, col.key)} className={(this.state.sort_by != col.key) ? '' : 'sort-' + this.state.sort_dir}>
                                        {col.name}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {_.map(rows, (row, row_i, rows) => {
                            return (
                                <tr key={row_i}>
                                    {_.map(cols, (col, col_i, cols) => {
                                        return this.getCell(row_i, row, col_i, col);
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                <ul className="pagination">
                                    <li className={(this.state.page < 2) ? 'disabled' : ''}>
                                        <a onClick={this.setPage.bind(this, this.state.page - 1)} href="#library_table" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    {pages.map((v, i, a) => {
                                        return (
                                            <li key={i} className={(this.state.page == v) ? 'active' : ''}>
                                                <a href="#library_table" onClick={this.setPage.bind(this, v)}>{v}</a>
                                            </li>
                                        );
                                    })}
                                    <li className={(this.state.page >= this.state.total_pages) ? 'disabled' : ''}>
                                        <a onClick={this.setPage.bind(this, this.state.page + 1)} href="#library_table" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </td>
                            <td><span className="pull-right">{this.props.rows.length} rows</span></td>
                        </tr>
                    </tfoot>
                </table>

            </section>
        }
    }

    onKeyDown(e) {
        console.info('[SmallGrid] onKeyDown', e.keyCode);
        if (e.keyCode == 27) {
            console.info('[SmallGrid] edit cancelled');
            this.editExit();
        }
    }

    editExit() {
        console.info('Exited editing');
        if (this.state.edit_idx != null) {
            this.setState({
                edit_idx: null,
                edit_prop: null
            });
        }
    }

    editCell(idx, prop) {
        console.info('[SmallGrid] editCell', idx, prop);
        this.setState({
            edit_idx: idx,
            edit_prop: prop
        });
    }

    editValue(e) {
        console.info('[SmallGrid] editValue', e);
        e.preventDefault();

        this.editExit();
        console.info('[SmallGrid] editValue: exiting editing');

        let row_i = parseInt(this._input.dataset.row);
        let col_name = this._input.name;
        let val = this._input.value;
        let defval = this._input.defaultValue;

        console.info('[SmallGrid] editValue: row_i', row_i);
        console.info('[SmallGrid] editValue: col_name', col_name);
        console.info('[SmallGrid] editValue: val', val);
        console.info('[SmallGrid] editValue: deval', defval);

        if (val != defval) {

            let i = this.getStart() + row_i;
            console.info('[SmallGrid] editValue: i', i);

            let row = this.props.rows[i];
            console.info('[SmallGrid] editValue: row', row);

            _.set(this.props.rows[i], col_name, val);
            console.info('[SmallGrid] editValue: row val updated');

            let col = _.filter(this.getCols(), {'key': col_name})[0];
            console.info('[SmallGrid] editValue: col', col);

            console.info('[SmallGrid] editValue: col edit', col.edit);
            col.edit(row, col_name, val);
        }
    }

};
