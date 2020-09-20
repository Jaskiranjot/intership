import React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from '../components/ExampleComponent';

// NOTE: for each component you build, a few minor tests should suffice.

// see testing documentation: https://testing-library.com/docs/dom-testing-library/api-queries

// this is an example test
test('renders the supplied name correctly', () => {
  const { getByText } = render(<ExampleComponent name='Oscar' />);
  const headingElement = getByText(/I'm Oscar/); // matches this text pattern
  expect(headingElement).toBeInTheDocument();
});

test('renders correctly without a supplied name prop', () => {
  const { getByText } = render(<ExampleComponent />);
  const headingElement = getByText(/I'm Code The Change YYC/);
  expect(headingElement).toBeInTheDocument();
})