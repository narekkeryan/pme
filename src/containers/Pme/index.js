import { connect } from 'react-redux';
import Pme from '../../components/Pme';

const mapStateToProps = state => ({
  degree: state.pme.degree,
  m: state.pme.m,
  h: state.pme.h,
  A: state.pme.A,
  X: state.pme.X
});

export default connect(mapStateToProps)(Pme);