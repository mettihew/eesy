import { Link, useLocation } from "react-router";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
import addCart from "../images/add-cart.svg";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { URL } from "../utils/URL";

function ProductCard(props) {
  let location = useLocation();
  const { grid } = props;
  const user = JSON.parse(localStorage.getItem("user"));

  const handleFavorite = (id) => {
    axios
      .post(`${URL}/add-to-favorite`, { pId: id, uId: user._id })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
      })
      .catch(() => alert("somthing went wrong"));
  };

  const fav = user?.favorite?.find((ev) => {
    return ev === props.id 
  })

  return (
    <>
      <div key={props._id} className={` ${location.pathname === "/store" ? `gr-${grid}` : ""}`}>

        <div className="product-card position-relative">

          <a className="product-image" href={`/product/${props.id}`}>
            <img src={props.images_title} alt="prod watch" />
            <img src={props.images_others[1]} alt="box" />
          </a>

            <h5 className="brand">{props.name}</h5>

           {/* THREE SMALL ICONS - COMPARE - ADD TO CART - FAVORITE */}
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column my-3">





              <Link>
                <img src={prodcompare} alt="prodcompare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addCart} alt="add-cart" />
              </Link>
              <Link>
              </Link>
              <Link>
                {fav ?
                    <FaHeart onClick={() => handleFavorite(props.id)} key={Math.random()} color="red" />
                    : 
                    <img src={wish} alt="add-cart" onClick={() => handleFavorite(props.id)}/>
                  }
              </Link>
            </div>
            {/* <LoginModal name="like" />  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
