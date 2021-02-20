import React from 'react'
import ReactDOM from 'react-dom'

import Rating from './Rating'

describe('Rating Component', () => {
    it('renders wihtout crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Rating/>,div)
        ReactDOM.unmountComponentAtNode(div)
    })
})