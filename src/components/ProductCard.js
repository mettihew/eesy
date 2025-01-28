
function ProductCard(props) {
 
  return (
        <div className="p-c2">

          <a href={`/product/${props.id}`}>
            <img src={props.images_title} alt="title" />
          </a>

          <h5>{props.name}</h5>

      </div>
  );
}

export default ProductCard;
