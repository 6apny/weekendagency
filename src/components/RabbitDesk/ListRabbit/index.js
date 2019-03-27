import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchRabbits,
  removeRabbit
} from '../../../services/rabbitDesk/actions';

import Modal from '../Modal';
import './styles.scss';

class ListRabbit extends Component {
  state = { modal: false }

  updateList() {
    this.props.fetchRabbits(this.props.token);
  }

  handlerRemove(e, rabbit) {
    e.stopPropagation();
    this.setState({ ...this.state, ...rabbit });

    this.props.removeRabbit({ ...rabbit, token: this.props.token });
    this.updateList();
  }

  render() {
    const renderRabbit = (rabbit, i) => {
      return (
        <React.Fragment>
          <div className='desk__index'>{i + 1}</div>
          <div className='desk__name'>{rabbit.name}</div>
          <div className='desk__weight'>{rabbit.weight}</div>
          <div
            className='desk__remove'
            onClick={(e) => {this.handlerRemove(e, rabbit)}}
          >x</div>
        </React.Fragment>
      );
    };

    return(
      <React.Fragment>
        <div>
          {
            this.props.rabbits.map((rabbit, i) => {
              return(
                <div
                  className='desk__item'
                  key={i}
                  onClick={() => this.setState({ modal: !this.state.modal, rabbit })}
                >
                  { renderRabbit(rabbit, i) }
                </div>
              );
            })
          }
        </div>
        {
          this.state.modal &&
            <Modal
              rabbit={this.state.rabbit}
              closeModal={() => this.setState({ modal: !this.state.modal })}
            />
        }
      </React.Fragment>
    );
  }
}

export default connect(state => {
  return {
    token: state.token,
    rabbits: state.rabbits
  }
}, { removeRabbit, fetchRabbits })(ListRabbit);