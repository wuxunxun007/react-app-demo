import UI from './ui';
import {connect} from 'react-redux';
import action from './action';
import store from '@/store/index';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Com = connect(
  mapStateToProps,
  mapDispatchToProps
)(UI);

export default Com;
