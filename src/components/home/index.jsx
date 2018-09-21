import UI from './ui';
import {connect} from 'react-redux';
import action from './action';
import store from '@/store/index';

const mapStateToProps = (state) => {
//  console.log(state)
  return {
    banner: state.home.banner,
    prolist: state.home.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList: () => {
//      console.log('1')
      store.dispatch(action.getbannerlist)
    },
    getProList: () => {
      store.dispatch(action.getprolist)
    }
  }
}

const Com = connect(
  mapStateToProps,
  mapDispatchToProps
)(UI);

export default Com;
