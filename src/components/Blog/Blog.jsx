import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,author} = blog;
    return (
        <div>
            <img className='p-4' src={cover} alt={`cover the picture of the title ${title}`} />
            <h2 className="text-4xl p-6">{title}</h2>
            <p>Author: {author}</p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;