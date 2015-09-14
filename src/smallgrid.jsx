var SmallGrid = React.createClass({
    getInitialState: function () {
        console.info('[SmallGrid] getInitialState');
        return {
            edit_idx: null,
            edit_prop: null,
            limit: 20,
            page: 1,
            total_pages: 1,
            sort_by: null,
            sort_dir: 'desc'
        };
    },

    componentWillMount: function () {
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
    },

    componentWillUpdate: function () {
        console.info('[SmallGrid] componentWillUpdate');
        this.setTotalPages();
    },

    setTotalPages: function () {
        var total_pages = Math.ceil(this.props.rows.length / this.state.limit);
        if (this.state.total_pages != total_pages) {
            console.info('[SmallGrid] setTotalPages: total_pages', total_pages);
            this.setState({total_pages: total_pages});
        }
    },

    formatDefault: function (v) {
        return v;
    },

    getCols: function () {
        var cols = _.map(this.props.cols, function (col, col_i, cols) {
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
        }, this);
        console.info('[SmallGrid] getCols', cols);
        return _.compact(cols);
    },

    getRows: function () {
        // always sort data first
        this.sortRows();

        // slice data by pagination
        var rows = this.props.rows.slice(this.getStart(), this.getEnd());

//        console.info('[SmallGrid] getRows', rows);
        return rows;
    },

    getStart: function () {
        var start = (this.state.page - 1) * this.state.limit;
//        console.info('[SmallGrid] getStart', start, '(incl)');
        return start;
    },

    getEnd: function () {
        var end = this.state.page * this.state.limit;
//        console.info('[SmallGrid] getEnd', end, '(excl)');
        return end;
    },

    onKeyDown: function (e) {
        console.info('[SmallGrid] onKeyDown');
        if (e.keyCode == 27) {
            console.info('[SmallGrid] edit cancelled');
            this.editExit();
        }
    },

    editExit: function () {
        console.info('Exited editing');
        if (this.state.edit_idx != null) {
            this.setState({
                edit_idx: null,
                edit_prop: null
            });
        }
    },

    editCell: function (idx, prop) {
        console.info('[SmallGrid] editCell', idx, prop);
        this.setState({
            edit_idx: idx,
            edit_prop: prop
        });
    },

    editValue: function (e) {
//        console.info('[SmallGrid] editValue', e);
        e.preventDefault();

        this.editExit();
        console.info('[SmallGrid] editValue: exiting editing');

        var form = $(React.findDOMNode(this.refs.formEdit));
        console.info('[SmallGrid] editValue: form', form);
        var val = form.find('[name=val]').val();
        console.info('[SmallGrid] editValue: val', val);
        var ori = form.find('[name=ori]').val();
        console.info('[SmallGrid] editValue: ori', ori);

        if (val != ori) {
            var row_i = parseInt(form.find('[name=row_i]').val());
            console.info('[SmallGrid] editValue row_i', row_i);
            var i = this.getStart() + row_i;
            console.info('[SmallGrid] editValue i', i);
            var row = this.props.rows[i];
            console.info('[SmallGrid] editValue row', row);
            var prop = form.find('[name=prop]').val();
            console.info('[SmallGrid] editValue col_key', prop);

            _.set(this.props.rows[i], prop, val);
            console.info('[SmallGrid] editValue row val updated');

            var col = _.filter(this.getCols(), {'key': prop})[0];
            console.info('[SmallGrid] editValue: col', col);
            console.info('[SmallGrid] editValue: col edit', col.edit);
            col.edit(row, prop, val);
            console.info('[SmallGrid] editValue: sending vals to function');
        }
    },

    getCell: function(row_i, row, col_i, col) {
//        console.info('[SmallGrid] getCell', row_i, row, col_i, col);
        var val = col.format(_.get(row, col.key, col.default));

        if (this.state.edit_idx == row_i && this.state.edit_prop == col.key) {
            return <td key={col_i}>
                <form ref="formEdit" onSubmit={this.editValue}>
                    <input type="hidden" name="row_i" value={row_i} />
                    <input type="hidden" name="prop" value={col.key} />
                    <input type="hidden" name="ori" value={val} />
                    <input type="text" name="val" onKeyDown={this.onKeyDown} defaultValue={val} autoFocus />
                </form>
            </td>;

        } else {
            if (col.edit) {
                return <td key={col_i} onClick={this.editCell.bind(this, row_i, col.key)} className="edit">{val}</td>;
            } else {
                return <td key={col_i}>{val}</td>;
            }
        }
    },

    getPages: function () {
//        console.info('[SmallGrid] getPages');
        var pages = [];
        for (var i=this.state.page-4; i<=this.state.page+4; i++) {
            if (i > 0 && i <= this.state.total_pages) {
                pages.push(i);
            }
        }
        console.info('[SmallGrid] getPages: pages', pages);
        return pages;
    },

    setPage: function (page) {
        console.info('[SmallGrid] setPage', page);
        this.editExit();
        this.setState({page: page});
    },

    sortBy: function (col) {
        this.editExit();
        var s = {};

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
    },

    sortRows: function () {
        console.info('[SmallGrid] sortRows', this.state.sort_by, this.state.sort_dir);

        if (this.state.sort_by) {
            console.info('[SmallGrid] sortRows: sorting');
            this.props.rows.sort(function (a, b) {
                var x = a[this.state.sort_by]; var y = b[this.state.sort_by];
                if (this.state.sort_dir == 'desc') {
                    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
                } else {
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                }
            }.bind(this));

        } else {
            console.info('[SmallGrid] sortRows: nothing to sort by');
        }
    },

    render: function () {
        console.info('[SmallGrid] render');
        if (!this.props.hasOwnProperty('rows') || this.props.rows.length < 1) {
            return <div className="alert alert-default">no data</div>
        } else {

            var pages = this.getPages();
            var cols = this.getCols();
            var rows = this.getRows();

            return <section>
                <a name="library_table"/><br/>
                <table className="table table-condensed table-sort table-hl">

                    <thead>
                        <tr>
                            {_.map(cols, function (col, col_i, cols) {
                                return (
                                    <th key={col_i} onClick={this.sortBy.bind(this, col.key)} className={(this.state.sort_by != col.key) ? '' : 'sort-' + this.state.sort_dir}>
                                        {col.name}
                                    </th>
                                );
                            }, this)}
                        </tr>
                    </thead>

                    <tbody>
                        {_.map(rows, function (row, row_i, rows) {
                            return (
                                <tr key={row_i}>
                                    {_.map(cols, function (col, col_i, cols) {
                                        return this.getCell(row_i, row, col_i, col);
                                    }, this)}
                                </tr>
                            );
                        }, this)}
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
                                    {pages.map(function (v, i, a) {
                                        return (
                                            <li key={i} className={(this.state.page == v) ? 'active' : ''}>
                                                <a href="#library_table" onClick={this.setPage.bind(this, v)}>{v}</a>
                                            </li>
                                        );
                                    }.bind(this))}
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
});
