import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.styl';
import * as actions from '../../actions';
import Counter from '../../components/Counter'

class App extends Component {
	constructor(props) {
	  super(props)
	}

	render() {
		const { count, ...actions } = this.props;
		return(
			<div>
				<Counter value={count} actions={actions} />
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		count: state.default.count,
	}
}

export default connect(mapStateToProps,{
	increment: actions.increment,
	decrement: actions.decrement,
	incrementAsync: actions.incrementAsync,
	decrementAsync: actions.decrementAsync,
})(App);