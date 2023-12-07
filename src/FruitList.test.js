import React from 'react';
import { render, screen } from '@testing-library/react';
import FruitList from './FruitList';

// Mock de datos de frutas para las pruebas
const mockFruits = [
  { id: 1, name: 'Apple', price: '$1.00' },
  { id: 2, name: 'Banana', price: '$0.75' },
];

test('renders Fruit List header', () => {
  render(<FruitList fruits={mockFruits} />);
  const headerElement = screen.getByText('Fruit List');
  expect(headerElement).toBeInTheDocument();
});

test('renders each fruit in the list', () => {
  render(<FruitList fruits={mockFruits} />);

  mockFruits.forEach((fruit) => {
    const nameElement = screen.getByText(fruit.name);
    const priceElement = screen.getByText(fruit.price);
    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});
