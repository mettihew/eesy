import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

function SpecialProduct(props) {
  const { id, images, title } = props;
  const navigate = useNavigate();

  return (
    <div key={id}>
      <div className="special-product-card">
        <div>
          <img src={images[0].url} alt="watch" className="img-fluid" />

          <div>
            <h5 className="brand">{title}</h5>
            <h5 className="title">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h5>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={4}
              edit={false}
            />
            <p className="price">
              <span className="red-p">$100</span>&nbsp;<strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center">
              <p className="mb-0"></p>
              <b>5</b> days
            </div>
            <div className="d-flex gap-10 align-items-center my-1">
              <span className="badge rounded-circle p-2 bg-danger">1</span>
              <span className="badge rounded-circle p-2 bg-danger">1</span>
              <span className="badge rounded-circle p-2 bg-danger">1</span>
            </div>

            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
            ></div>
            <button
              className="button"
              onClick={() => {
                navigate(`/product/${id}`)}}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
