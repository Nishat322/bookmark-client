import React from 'react'
import ReactDOM from 'react-dom'

import AddBookmark from './AddBookmark'

describe('AddBookmark Component', () => {
    it('renders wihtout crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <AddBookmark/>
        , div)
        ReactDOM.unmountComponentAtNode(div) 
    })
})