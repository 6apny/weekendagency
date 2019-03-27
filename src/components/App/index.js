import React, { Component } from 'react';
import { connect } from 'react-redux';

import Authorize from '../Authorize';
import RabbitDesk from '../RabbitDesk';

import './styles.scss';

class App extends Component {
  render() {
    const { token } = this.props;
    const status = ((token === 'Loading' || token === 'Error') ? token : '');

    return (
      <React.Fragment>
        <div>{ status }</div>
        <div className='container'>
          { (token === false || status !== '') && <Authorize /> }
          { (token !== false && status === '') && <RabbitDesk /> }
        </div>
      </React.Fragment>
    )
  }
}

export default connect(
  function(state) {
    return { token: state.token }
  })(App);