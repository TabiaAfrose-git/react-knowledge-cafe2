import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBooKmarks] = useState([]);
  const [readingtime, setReadingTime] = useState(0);

  const handelAddToBookmark = blog =>{
    const newBookmarks =[...bookmarks,blog];
    setBooKmarks(newBookmarks);
  }
  const handelMarkAsRead = (id,time) => {
    const newReadingtime = readingtime + time;
    setReadingTime(newReadingtime);
    //remove bookmark
    //console.log("Bookmark id: "+ id);
    const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id !== id)
    setBooKmarks(remainingBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs
        handelAddToBookmark = {handelAddToBookmark}
        handelMarkAsRead = {handelMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingtime = {readingtime}></Bookmarks>
      </div>

    </>
  )
}

export default App
