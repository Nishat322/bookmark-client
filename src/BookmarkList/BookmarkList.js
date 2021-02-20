import React, { Component } from 'react'
import Bookmark from '../Bookmark/Bookmark'

import './BookmarkList.css'

class BookmarkList extends Component {

    static defaultProps = {
        bookmarks: []
    }

    render() { 
        const bookmarks = this.props.bookmarks.map((bookmark, i) => <Bookmark {...bookmark} key={i}/>)
        return (  
            <div className = 'bookmarkList'>
                {bookmarks}
            </div>
        )
    }
}
 
export default BookmarkList