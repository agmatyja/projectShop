import { connect } from 'react-redux';
import { getSort, sortProducts } from '../../../redux/ProductsRedux';
import Widget from './Widget';



const mapStateToProps = state => ({
  sort: getSort(state)
});

const mapDispatchToProps = dispatch => ({
  sortProducts: (sort) => dispatch(sortProducts( sort)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Widget);