import { connect } from 'react-redux';
import Pme from '../../components/Pme';

const mapStateToProps = state => ({
  degree: state.pme.degree,
  m: state.pme.m
});

export default connect(mapStateToProps)(Pme);