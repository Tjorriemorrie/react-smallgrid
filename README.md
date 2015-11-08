# react-smallgrid
A datatable for react (bootstrap themed)

Features: pagination, ordering, formatting, editing


## Installation
---

Install via npm:
   
    npm install -S react-smallgrid
    
    
    
#### Dependencies

This library requires [lodash](https://www.lodash.com):
    
This library is styled with [bootstrap](https://getbootstrap.com):

    bower install -S bootstrap
    

### Set up

Full example (incl lodash and bootstrap):

    <link href="bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <link href="bootstrap/dist/css/bootstrap-theme.css" rel="stylesheet">
    
    <script src="jquery/dist/jquery.min.js" type="text/javascript"></script>
    <script src="lodash/lodash.js" type="text/javascript"></script>


## Basic Usage
---

### Foreword

The table can only be ordered by one column; I'll probably add it to support multiple
columns in the future.

The table is hardcoded with pagination. Currently the row limit/page size is hardcoded at 20. I'll
probably change it in the future, and you can also easily change it and run the gulp.

Also I've used bootstrap CSS, and I'll probably make it customisable in the future.

Just require the library:

> import SmallGrid from 'react-smallgrid'

### Minimal

SmallGrid has two required attributes:

- __rows__ an array of objects (the data)
- __cols__: an array of objects (the columns)

The `cols` attribute has the following required property for the objects:

- __key__: the property/key on the data


        <SmallGrid
            rows={this.state.rows}
            cols={[
                {'key': 'rating'},
                {'key': 'name'},
                {'key': 'track_number'},
            ]}
        />
    
[refer example](examples/1_basic_minimal.html)
![alt tag](examples/1_basic_minimal.png)


 
### Column headings

Add the property `name` to the cols objects for the heading of the columns:

            <SmallGrid
                rows={this.state.rows}
                cols={[
                    {'key': 'rating',       'name': 'Rating'},
                    {'key': 'name',         'name': 'Title'},
                    {'key': 'track_number', 'name': 'Track'},
                ]}
            />

[refer example](examples/2_basic_headings.html)
![alt tag](examples/2_basic_headings.png)


### Nested objects

Add the nested object to the `key` of the columns:

            <SmallGrid
                rows={this.state.rows}
                cols={[
                    {'key': 'rating',       'name': 'Rating'},
                    {'key': 'name',         'name': 'Title'},
                    {'key': 'artist.name',  'name': 'Artist'},
                    {'key': 'album.name',   'name': 'Album'},
                    {'key': 'track_number', 'name': 'Track'},
                ]}
            />

[refer example](examples/3_basic_nested_objects.html)
![alt tag](examples/3_basic_nested_objects.png)


## Advanced Usage
---

### Formatting

You can pass `format` function on the `cols` object for the formatting you wish to apply to the column:

    formatPercentage: function (v) {
        return Math.round(v * 100) + '%';
    },

    ...
    
            <SmallGrid
                rows={this.state.rows}
                cols={[
                    {'key': 'rating',       'name': 'Rating', 'format': this.formatPercentage},
                    {'key': 'name',         'name': 'Title'},
                    {'key': 'artist.name',  'name': 'Artist'},
                    {'key': 'album.name',   'name': 'Album'},
                    {'key': 'track_number', 'name': 'Track'},
                ]}
            />


[refer example](examples/4_advanced_formatting.html)
![alt tag](examples/4_advanced_formatting.png)


### Editing

You can pass `edit` function on the `cols` object to enable editing on that column. 'Enter' will
submit the changes and 'esc' will cancel the edit. If the value is the same, the propagation
will also be stopped. The function provided to edit will then receive three params:

- __row__: the complete row object from the data (unchanged)
- __key__: the key/property of the row that was changed
- __val__: the new value for the property that was submitted

        onEdit: function (row, key, val) {
            console.info('Row: ', row);
            console.info('Key: ', key);
            console.info('Val: ', val);
            // send update to backend
        },
    
        ...
    
            <SmallGrid
                rows={this.state.rows}
                cols={[
                    {'key': 'rating',       'name': 'Rating'},
                    {'key': 'name',         'name': 'Title',  'edit': this.onEdit},
                    {'key': 'artist.name',  'name': 'Artist', 'edit': this.onEdit},
                    {'key': 'album.name',   'name': 'Album'},
                    {'key': 'track_number', 'name': 'Track'},
                ]}
            />


[refer example](examples/5_advanced_editing.html)
![alt tag](examples/5_advanced_editing.png)

![alt tag](examples/5_advanced_editing_values_1.png)

![alt tag](examples/5_advanced_editing_values_2.png)
