import React from 'react';

function CartColouuns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row text-muted">
        <div className="col-10 mx-auto col-lg-2">
          <p data-testid="product" className="text-uppercase">
            product
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p data-testid="name-of-product" className="text-uppercase">
            name of product
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p data-testid="price" className="text-uppercase">
            price
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p data-testid="product-quantity" className="text-uppercase">
            product quantity
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p data-testid="remove" className="text-uppercase">
            remove
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p data-testid="total" className="text-uppercase">
            total
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartColouuns;
