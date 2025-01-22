import { Link } from "react-router-dom";

function BlogCard(props) {

  return (
    <div className="blog-card m-1" key={props.id}>
      <img src="/shop/images/blog-1.jpg" className="img-fluid w-100" alt="blog" width="100px"/>
      <div className="m-4">
        <p className="date">19 Sep, 2023</p>
        <h5 className="title">{props.title}</h5>
        <p className="desc">{props.desctiption}</p>
        <Link to={`/shop/blog/${props.id}`} className="button">
          Read More
        </Link>
        <p>{props.createdAt}</p>
      </div>
    </div>
  );
}

export default BlogCard;
