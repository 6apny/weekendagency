import React, { Component } from 'react';
import { connect } from 'react-redux';

import DumbInput from '../../DumbInput';
import DumbButton from '../../DumbButton';

import {
  createOrUpdateRabbit
} from '../../../services/rabbitDesk/modal/actions';
import { fetchRabbits } from '../../../services/rabbitDesk/actions';

import './styles.scss';

class Modal extends Component {
  constructor(props){
    super();
    this.state = {
      ...props.rabbit
    }
  }

  handlerChange({ target }) {
    this.setState({ ...this.state, [target.name]: target.value });
  }

  handlerCreateOrUpdate() {
    this.props.createOrUpdateRabbit({
      ...this.state,
      token: this.props.token
    });
    this.props.fetchRabbits(this.props.token);
    this.props.closeModal();
  }

  render() {
    return(
      <div className='modal' onClick={() => this.props.closeModal()}>
        <div className='modal__container'>
          <DumbInput
            className='modal__input'
            handlerChange={ (e) => this.handlerChange(e) }
            name='name'
            value={this.state.name}
            placeholder='Input name'
          />
          <DumbInput
            className='modal__input'
            handlerChange={ (e) => this.handlerChange(e) }
            name='weight'
            value={this.state.weight}
            placeholder='Input weight'
          />
          <DumbButton
            title='Ok'
            handlerClick={() => this.handlerCreateOrUpdate()}
          />
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    token: state.token
  }
}, { createOrUpdateRabbit, fetchRabbits })(Modal);