import React from 'react';
import ReactDOM from 'react-dom'
import MyButton  from '../mybutton'
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";

import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('mybutton renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<MyButton></MyButton>, div)
})


it('check if button renders in correct way', ()=>{
    const {getByTestId} = render(<MyButton label='click me'></MyButton>)
    expect(getByTestId('button')).toHaveTextContent('Hello click me')
})


it('check if button renders in correct way', ()=>{
    const {getByTestId} = render(<MyButton label='add'></MyButton>)
    expect(getByTestId('button')).toHaveTextContent('add')
})

it('create snapshot if it does not exist and match it for all test in future', ()=>{
    const tree = renderer.create(<MyButton label='snapshot'></MyButton>).toJSON()
    expect(tree).toMatchSnapshot()
})