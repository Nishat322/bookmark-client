import React, { Component } from 'react'

import BookmarksContext from '../BookmarksContext'
import BookmarkItem from '../BookmarkItem/BookmarkItem'
import './BookmarkList.css'

class BookmarkList extends Component {
    static contextType = BookmarksContext
    static defaultProps = {
        bookmarks: []
    }

    render() { 
        const {bookmarks} = this.context
        return (  
            <div className = 'BookmarkList'>
                <h2>Your Bookmarks</h2>
                <ul className = 'BookmarkList__list' aria-live = 'polite'>
                    {bookmarks.map(bookmark =>
                        <BookmarkItem
                            key = {bookmark.id}
                            {...bookmark}
                        />    
                    )}
                </ul>
            </div>
        )
    }
}
 
export default BookmarkList