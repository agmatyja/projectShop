import React from 'react';
import PostForm from '../../features/ProductForm/ProductFormContainer';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

const AddProduct = () => (
  <div>
    <h1>Add Product</h1>
	<ProductForm />
  </div>
);


export default AddProduct;