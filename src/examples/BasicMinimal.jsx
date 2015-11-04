var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.component {

	constructor(props) {
		super(props);
		// Operations usually carried out in componentWillMount go here
	}

	render() {
		return <div>Hello World</div>;
	}
}
;

console.info('reactdom render');

var mc = MyComponent();

ReactDOM.render(<mc />, document.getElementById('whoopidoo'));
