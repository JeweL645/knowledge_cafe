import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
  return (
    <div className="">
      <div className="border-2 rounded-xl p-4 mb-1">
        <h3 className="text-xl semi-bold">{title}</h3>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}


export default Bookmark
