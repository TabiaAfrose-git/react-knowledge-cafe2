import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from 'prop-types';


const Blogs = ({handelAddToBookmark,handelMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 bg-slate-400 text-2xl p-4" >
                Blogs : {blogs.length}
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handelAddToBookmark = {handelAddToBookmark}
                    handelMarkAsRead = {handelMarkAsRead}
                    ></Blog>)
                }
        </div>
    );
};
Blogs.propTypes = {
    handelAddToBookmark : PropTypes.func,
    handelMarkAsRead: PropTypes.func
}

export default Blogs;