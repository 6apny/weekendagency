import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddRabbit from './AddRabbit';
import ListRabbit from './ListRabbit';
import './styles.scss';

class RabbitDesk extends Component {

  render() {

    return(
      <div className='desk'>
        <AddRabbit />
        <ListRabbit />
      </div>
    );
  }
}

export default connect()(RabbitDesk);