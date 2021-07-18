import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartColumns from '../CartColumns';

describe('Testing the existence of the headings in the columns in the cart page', () => {
  let cartColumnsComponent;
  beforeEach(() => {
    cartColumnsComponent = render(<CartColumns />);
  });

  test('product column heading renders correctly', () => {
    const productEl = cartColumnsComponent.getByTestId('product');
    expect(productEl.textContent).toBe('product');
    expect(productEl.className).toBe('text-uppercase');
  });

  test('name of product column heading renders correctly', () => {
    const nameOfProductEl = cartColumnsComponent.getByTestId('name-of-product');
    expect(nameOfProductEl.textContent).toBe('name of product');
    expect(nameOfProductEl.className).toBe('text-uppercase');
  });

  test('price column heading renders correctly', () => {
    const priceEl = cartColumnsComponent.getByTestId('price');
    expect(priceEl.textContent).toBe('price');
    expect(priceEl.className).toBe('text-uppercase');
  });

  test('product quantity column heading renders correctly', () => {
    const productQuantityEl =
      cartColumnsComponent.getByTestId('product-quantity');
    expect(productQuantityEl.textContent).toBe('product quantity');
    expect(productQuantityEl.className).toBe('text-uppercase');
  });

  test('remove column heading renders correctly', () => {
    const removeEl = cartColumnsComponent.getByTestId('remove');
    expect(removeEl.textContent).toBe('remove');
    expect(removeEl.className).toBe('text-uppercase');
  });

  test('total column heading renders correctly', () => {
    const totalEl = cartColumnsComponent.getByTestId('total');
    expect(totalEl.textContent).toBe('total');
    expect(totalEl.className).toBe('text-uppercase');
  });

  afterEach(cleanup);
});
