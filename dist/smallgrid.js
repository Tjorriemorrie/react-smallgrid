'use strict';

var SmallGrid = React.createClass({
    displayName: 'SmallGrid',

    getInitialState: function getInitialState() {
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

    componentWillMount: function componentWillMount() {
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
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {

        // update total pages
        if (nextProps.rows.length != this.props.rows.length) {
            var total_pages = Math.ceil(nextProps.rows.length / this.state.limit);
            if (this.state.total_pages != total_pages) {
                console.info('[SmallGrid] componentWillReceiveProps: total_pages', total_pages);
                this.setState({ total_pages: total_pages });
            }
        }
    },

    formatDefault: function formatDefault(v) {
        return v;
    },

    getCols: function getCols() {
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

    getRows: function getRows() {
        // always sort data first
        this.sortRows();

        // slice data by pagination
        var rows = this.props.rows.slice(this.getStart(), this.getEnd());

        console.info('[SmallGrid] getRows', rows);
        return rows;
    },

    getStart: function getStart() {
        var start = (this.state.page - 1) * this.state.limit;
        //        console.info('[SmallGrid] getStart', start, '(incl)');
        return start;
    },

    getEnd: function getEnd() {
        var end = this.state.page * this.state.limit;
        //        console.info('[SmallGrid] getEnd', end, '(excl)');
        return end;
    },

    onKeyDown: function onKeyDown(e) {
        console.info('[SmallGrid] onKeyDown');
        if (e.keyCode == 27) {
            console.info('[SmallGrid] edit cancelled');
            this.editExit();
        }
    },

    editExit: function editExit() {
        console.info('Exited editing');
        if (this.state.edit_idx != null) {
            this.setState({
                edit_idx: null,
                edit_prop: null
            });
        }
    },

    editCell: function editCell(idx, prop) {
        console.info('[SmallGrid] editCell', idx, prop);
        this.setState({
            edit_idx: idx,
            edit_prop: prop
        });
    },

    editValue: function editValue(e) {
        //        console.info('[SmallGrid] editValue', e);
        e.preventDefault();

        this.editExit();
        //        console.info('[SmallGrid] editValue: exiting editing');

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

            var col = _.filter(this.getCols(), { 'key': prop })[0];
            console.info('[SmallGrid] editValue: col', col);
            console.info('[SmallGrid] editValue: col edit', col.edit);
            col.edit(row, prop, val);
            console.info('[SmallGrid] editValue: sending vals to function');
        }
    },

    getCell: function getCell(row_i, row, col_i, col) {
        //        console.info('[SmallGrid] getCell', row_i, row, col_i, col);
        var val = col.format(_.get(row, col.key, col['default']));

        if (this.state.edit_idx == row_i && this.state.edit_prop == col.key) {
            return React.createElement(
                'td',
                { key: col_i },
                React.createElement(
                    'form',
                    { ref: 'formEdit', onSubmit: this.editValue },
                    React.createElement('input', { type: 'hidden', name: 'row_i', value: row_i }),
                    React.createElement('input', { type: 'hidden', name: 'prop', value: col.key }),
                    React.createElement('input', { type: 'hidden', name: 'ori', value: val }),
                    React.createElement('input', { type: 'text', name: 'val', onKeyDown: this.onKeyDown, defaultValue: val, autoFocus: true })
                )
            );
        } else {
            if (col.edit) {
                return React.createElement(
                    'td',
                    { key: col_i, onClick: this.editCell.bind(this, row_i, col.key), className: 'edit' },
                    val
                );
            } else {
                return React.createElement(
                    'td',
                    { key: col_i },
                    val
                );
            }
        }
    },

    getPages: function getPages() {
        //        console.info('[SmallGrid] getPages');
        var pages = [];
        for (var i = this.state.page - 4; i <= this.state.page + 4; i++) {
            if (i > 0 && i <= this.state.total_pages) {
                pages.push(i);
            }
        }
        //        console.info('[SmallGrid] getPages: pages', pages);
        return pages;
    },

    setPage: function setPage(page) {
        console.info('[SmallGrid] setPage', page);
        this.editExit();
        this.setState({ page: page });
    },

    sortBy: function sortBy(col) {
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

    sortRows: function sortRows() {
        console.info('[SmallGrid] sortRows', this.props.sort_by, this.props.sort_dir);

        if (this.props.sort_by) {
            console.info('[SmallGrid] sortRows: sorting');
            this.props.rows.sort((function (a, b) {
                var x = a[this.state.sort_by];var y = b[this.state.sort_by];
                return x < y ? -1 : x > y ? 1 : 0;
            }).bind(this));

            if (this.state.sort_dir == 'desc') {
                this.props.rows = this.props.rows.reverse();
            }
        } else {
            console.info('[SmallGrid] sortRows: nothing to sorty by');
        }
    },

    render: function render() {
        console.info('[SmallGrid] render');
        if (!this.props.hasOwnProperty('rows') || this.props.rows.length < 1) {
            return React.createElement(
                'div',
                { className: 'alert alert-default' },
                'no data'
            );
        } else {

            var pages = this.getPages();
            var cols = this.getCols();
            var rows = this.getRows();

            return React.createElement(
                'section',
                null,
                React.createElement('a', { name: 'library_table' }),
                React.createElement('br', null),
                React.createElement(
                    'table',
                    { className: 'table table-condensed table-sort table-hl' },
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            _.map(cols, function (col, col_i, cols) {
                                return React.createElement(
                                    'th',
                                    { key: col_i, onClick: this.sortBy.bind(this, col.key), className: this.state.sort_by != col.key ? '' : 'sort-' + this.state.sort_dir },
                                    col.name
                                );
                            }, this)
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        _.map(rows, function (row, row_i, rows) {
                            return React.createElement(
                                'tr',
                                { key: row_i },
                                _.map(cols, function (col, col_i, cols) {
                                    return this.getCell(row_i, row, col_i, col);
                                }, this)
                            );
                        }, this)
                    ),
                    React.createElement(
                        'tfoot',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                { colSpan: '4' },
                                React.createElement(
                                    'ul',
                                    { className: 'pagination' },
                                    React.createElement(
                                        'li',
                                        { className: this.state.page < 2 ? 'disabled' : '' },
                                        React.createElement(
                                            'a',
                                            { onClick: this.setPage.bind(this, this.state.page - 1), href: '#library_table', 'aria-label': 'Previous' },
                                            React.createElement(
                                                'span',
                                                { 'aria-hidden': 'true' },
                                                '«'
                                            )
                                        )
                                    ),
                                    pages.map((function (v, i, a) {
                                        return React.createElement(
                                            'li',
                                            { key: i, className: this.state.page == v ? 'active' : '' },
                                            React.createElement(
                                                'a',
                                                { href: '#library_table', onClick: this.setPage.bind(this, v) },
                                                v
                                            )
                                        );
                                    }).bind(this)),
                                    React.createElement(
                                        'li',
                                        { className: this.state.page >= this.state.total_pages ? 'disabled' : '' },
                                        React.createElement(
                                            'a',
                                            { onClick: this.setPage.bind(this, this.state.page + 1), href: '#library_table', 'aria-label': 'Next' },
                                            React.createElement(
                                                'span',
                                                { 'aria-hidden': 'true' },
                                                '»'
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement(
                                    'span',
                                    { className: 'pull-right' },
                                    this.props.rows.length,
                                    ' rows'
                                )
                            )
                        )
                    )
                )
            );
        }
    }
});