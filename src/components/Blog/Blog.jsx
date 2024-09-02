import PropTypes from 'prop-types';
import './Blog.css'

const Blog = ({blog}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
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
                        <small className='text-sm'> {reading_time} min read</small>
                    </div>
                </div>
                <h2 className="text-4xl">{title}</h2>
                <p className='text-sm'>
                    {
                        hashtags.map((hash,idx) => <span key = {idx}><a>{hash}</a></span>)
                    }
                </p>
                <a className='text-sm' href="">Mark as read</a>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;