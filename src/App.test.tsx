import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from '/Users/timothyangus/code/TimAngus321/challenges/cubbit-test-project/src/Screens/Components/header'


// test('renders learn react link', () => {
//   render(<App />);

describe('<App />', () => {

  test('It should render', () => {
    const App = render(<Header />);
  })
})

// });
