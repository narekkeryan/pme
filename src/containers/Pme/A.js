import { connect } from 'react-redux';
import A from '../../components/Pme/A';
import { changeA } from '../../actions/pmeActions';

const mapStateToProps = state => ({
  A: state.pme.A
});

const mapDispatchToProps = dispatch => ({
  changeA: A => dispatch(changeA(A))
});

export default connect(mapStateToProps, mapDispatchToProps)(A);