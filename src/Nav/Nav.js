import React from 'react'
import {Link} from 'react-router-dom'

function Nav(props){
    return(
        <nav className = 'Nav'>
            <Link to = {'/'}>
                Bookmark List
            </Link>
            {' '}
            <Link to = {'/add-bookmark'}>
                Add Bookmark
            </Link>
        </nav>
    )
}

export default Nav