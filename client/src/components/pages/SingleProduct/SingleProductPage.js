import React from 'react';

import SingleProduct from '../../features/SingleProduct/SingleProductContainer';

const SingleProductPage = (params) => (
  <div>
    <SingleProduct id={params.match.params.id}/>
  </div>
);

export default SingleProductPage;