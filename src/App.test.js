import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//define a test suite
describe("all test for app component", ()=>{


  it('renders the component without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<App></App>, div)
    ReactDOM.unmountComponentAtNode(div)
  })




})

