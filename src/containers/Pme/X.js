import { connect } from 'react-redux';
import X from '../../components/Pme/X';
import { changeX } from '../../actions/pmeActions';

const mapStateToProps = state => ({
  X: state.pme.X
});

const mapDispatchToProps = dispatch => ({
  changeX: X => dispatch(changeX(X))
});

export default connect(mapStateToProps, mapDispatchToProps)(X);