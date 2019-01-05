import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  enrolled: state.pme.enrolled
});

export default connect(mapStateToProps)(App);