import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import {BASE_URL} from '../../../config';

class SinglePost extends React.Component {

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct(this.props.id);
  }

  render() {
    const { product, request } = this.props;
	 
    if (!request.pending && request.success && product) 
        return (
	      <article className="single-product">
			<PageTitle>{product.title}</PageTitle>
			
			<HtmlBox>{product.content}</HtmlBox>
			
          </article>
		);
    if (request.pending || request.success === null)
        return <Spinner />;
    if (!request.pending && request.error !== null && request.error !== undefined)
        return <Alert variant="error">{request.error}</Alert>;
    if (!request.pending && request.success && !post) 
        return <Alert variant="info">No post</Alert>;
    return <Spinner />;
  }
}


SinglePost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  loadPost: PropTypes.func.isRequired,
  id: PropTypes.string
};

//export default SinglePost;
export default withRouter(props => <SinglePost {...props}/>);