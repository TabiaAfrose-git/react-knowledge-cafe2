
import { PropTypes } from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingtime}) => {
    return (
        <div className="w-1/3 bg-slate-100 p-2  bg-gray-300 ml-2 mt-4 rounded-md pt-4">
            <div>
                <h3 className='text-3xl'>Reading Time: {readingtime}</h3>
            </div>
            <h3 className='text-2xl text-center  '>BookMark: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark
                key = {bookmark.id}
                bookmark={bookmark}>

                </Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingtime: PropTypes.number
}
export default Bookmarks;