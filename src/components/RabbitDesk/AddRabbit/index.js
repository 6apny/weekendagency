import React, { Component } from 'react';
import { connect } from 'react-redux';

import { parseJWT } from '../../../services/utils';
import './styles.scss';

import Modal from '../Modal';
import DumbButton from '../../DumbButton';

class AddRabbit extends Component {
  state = { modal: false };

  render() {
    return(
      <React.Fragment>
        <div className='menu'>
          <h2>User: {parseJWT(this.props.token).username}</h2>
          <DumbButton
            handlerClick={() => this.setState({ modal: !this.state.modal })}
            title='Add Rabbit'
          />
        </div>
        {
          this.state.modal && 
          <Modal
            closeModal={() => this.setState({ modal: !this.state.modal })}
          />
        }
      </React.Fragment>
    );
  }
}

export default connect(state => {
  return {
    modal: state.modal,
    token: state.token
  }
})(AddRabbit);