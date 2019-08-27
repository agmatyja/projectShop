import { connect } from 'react-redux';
import { getNumberOfCartItems } from '../../../redux/ProductsRedux';
import Footer from './Footer';

const mapStateToProps = state => ({
  count: getNumberOfCartItems(state)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);