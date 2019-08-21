import React from 'react';
import { PropTypes } from 'prop-types';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

//import './ProductForm.scss';

class ProductForm extends React.Component {

  state = {
    product: {
      title: '',
      author: '',
	  description: 'Lorem ipsum',
      price: 0,
	  quantity: 0
    }
  }
  
  handleChange = (e) => {
    const { product } = this.state;
    this.setState({ product: { ...product, [e.target.name]: e.target.value }})
  }
  
  handleEditor = (text) => {
    const { product } = this.state;
    this.setState({ product: { ...product, content: text }});
  }
  
  addProduct = (e) => {
    const { addProduct } = this.props;
    const { product } = this.state;

    e.preventDefault();
    addProduct(product);
  }
  
  componentDidMount(){
	const { resetRequest } = this.props;
	resetRequest();
  }
  
  render() {
	  
    const { product } = this.state;
    const { handleChange, handleEditor, addProduct } = this;
    const { request } = this.props;

    if(request.error) return <Alert variant="error">{request.error}</Alert>
    else if(request.success) return <Alert variant="success">Product has been added!</Alert>
    else if(request.pending) return <Spinner />
    else return (
      <form onSubmit={addProduct}>
	  
        <TextField
          label="Title"
          value={product.title}
          onChange={handleChange}
          name="title"
        />

        <TextField
          label="Author"
          value={product.author}
          onChange={handleChange}
          name="author"
        />

        <SectionTitle>Edit product price</SectionTitle>
		
        <Editor
          className="content-editor"
          text={product.content}
          onChange={handleEditor}
          options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
        />

        <Button variant="primary">Add product</Button>

      </form>
    );
  }
 
};


  
ProductForm.propTypes = {
  request: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired,
};


export default ProductForm;