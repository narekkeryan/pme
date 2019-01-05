import { connect } from 'react-redux';
import Options from '../../components/Pme/Options';
import { changeOption } from '../../actions/pmeActions';

const mapStateToProps = state => ({
  degree: state.pme.degree,
  m: state.pme.m,
  h: state.pme.h
});

const mapDispatchToProps = dispatch => ({
  changeOption: (key, value) => dispatch(changeOption(key, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);