import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from './Product';
import Header from '../Header';
import { fetchProducts } from '../../store/actions/productActions';
import asyncComponent from '../hoc/asyncComponent';

//Load modal asynchronously i.e load it only when needed.
const AsyncModalComponent = asyncComponent(() => import('../Modal'));

const ProductList = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => Object.values(products));
  const isLoading = useSelector(({ products }) => products.isLoading);

  //get the products on the initial render
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderList = () =>
    products.slice(0, -1).map((product, index) => (
      <div key={index} className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <Product openModal={openModal} product={product} />
      </div>
    ));

  console.log('is loading ----- ', isLoading);

  if (isLoading === undefined || isLoading === true)
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Header name="Loading..." />
      </div>
    );

  const PageHeading = 'OUR PRODUCTS';
  if (!products) {
    return <h1>No Products Available</h1>;
  }

  return (
    <div className="container">
      <div className="row">
        <Header name={PageHeading} />
      </div>
      <div className="row">{renderList()}</div>
      {/* Modal */}
      <div>
        <AsyncModalComponent
          products={products}
          showModal={showModal}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default ProductList;
