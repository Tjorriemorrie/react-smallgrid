var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});

console.info('reactdom render');
ReactDOM.render(<MyComponent />, document.getElementById('whoopidoo'));
