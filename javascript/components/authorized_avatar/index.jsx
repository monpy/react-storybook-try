import { Avatar } from '../avatar';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps)(Avatar);
