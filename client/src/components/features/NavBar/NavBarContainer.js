import { connect } from 'react-redux';
import { getNumberOfCartItems } from '../../../redux/ProductsRedux';
import NavBar from './NavBar';

const mapStateToProps = state => ({
  count: getNumberOfCartItems(state)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);