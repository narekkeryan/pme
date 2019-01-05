import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { enroll } from '../../actions/pmeActions';

const mapDispatchToProps = dispatch => ({
  enroll: enrolled => dispatch(enroll(enrolled))
});

export default connect(null, mapDispatchToProps)(Menu);