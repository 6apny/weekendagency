import React, { Component } from 'react';
import { connect } from 'react-redux';

import DumbInput from '../DumbInput';
import DumbButton from '../DumbButton';

import { checkUser } from '../../services/authorize/actions';

import './styles.scss';

class Authorize extends Component {
  state = {}

  handlerChange({ target }) {
    this.setState({[target.name]: target.value});
  }

  render() {
    return(
      <div className='authorize'>
        <DumbInput
          className='authorize__username'
          placeholder="username = carrot6"
          handlerChange={(e) => this.handlerChange(e)}
          name="username"
        />
        <DumbInput
          className='authorize__password'
          placeholder="password = carrot6"
          handlerChange={(e) => this.handlerChange(e)}
          name="password"
          password={true}
        />
        <DumbButton
          handlerClick={() => this.props.checkUser(this.state)}
          title="Sign in"
        />
      </div>
    );
  }
}

export default connect(null, { checkUser })(Authorize);