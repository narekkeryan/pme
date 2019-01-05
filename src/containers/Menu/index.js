import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { enroll } from '../../actions/pmeActions';

const mapDispatchToProps = dispatch => ({
  enroll: () => dispatch(enroll(true))
});

export default connect(null, mapDispatchToProps)(Menu);