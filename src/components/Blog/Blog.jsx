import PropTypes from 'prop-types';
import './Blog.css';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handelAddToBookmark,handelMarkAsRead}) => {
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='m-2 border-b-2 '>
            <div className='blog-background p-2 rounded-md'>
                <img className='mb-4' src={cover} alt={`cover the picture of the title ${title}`} />
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <img className='w-16'src={author_img} alt="" />
                        <div>
                            <h3>{author}</h3>
                            <p className='text-sm'>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <small className='text-sm mx-2'> {reading_time} min read</small>
                        <button
                        onClick={()=> handelAddToBookmark(blog)}
                         className='text-sm'><FaBookmark></FaBookmark>
                        </button>
                    </div>
                </div>
                <h2 className="text-4xl">{title}</h2>
                <p className='text-sm'>
                    {
                        hashtags.map((hash,idx) => <span key = {idx}><a>{hash}</a></span>)
                    }
                </p>
                <button
                onClick={()=> handelMarkAsRead(id,reading_time)}
                className='text-fuchsia-800 text-sm font-bold underline' href="">Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelAddToBookmark: PropTypes.func,
    handelMarkAsRead: PropTypes.number
}

export default Blog;