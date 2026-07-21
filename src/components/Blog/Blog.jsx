import PropTypes from "prop-types";
import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    coverImage,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtag,
  } = blog;
  return (
    <div className="border my-2 p-4 rounded-4xl">
      <img className="w-full  mb-8" src={coverImage} alt={title} />
      <div className="flex justify-between items-center my-4 mx-4">
        <div className="flex">
          <img className="w-14 mr-6" src={author_img} />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className=" ml-4 text-red-600 text-2xl">
            <BsBookmarks></BsBookmarks>
          </button>
        </div>
      </div>

      <h2 className="text-4xl my-4 font-bold">{title}</h2>
      <p>
        {
          hashtag.map( (hash, idx)  => <span key={idx}> <a className="mr-5 text-blue-600 text-xl" href="">#{hash}</a> </span>)
        }</p>
    </div>
  );
};

Blog.propType = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func
};
export default Blog;
