import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div>
      <img src={coverImage} alt={title} />
      <div className="flex justify-between items-center my-4">
        <div className="flex">
          <img className="w-14 mr-6" src={author_img} />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>

      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtag.map( (hash, idx)  => <span key={idx}> <a href="">#{hash}</a> </span>)
        }</p>
    </div>
  );
};

Blog.propType = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
