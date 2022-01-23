import { productImg } from "../../images";
import classes from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.profile}>
        <img src={productImg} />
        <div className={classes.contact}>
          <h2>Product Name</h2>
          <h3>Brand Name</h3>
          <h4>$29.99</h4>
        </div>
      </div>
      <div className={classes["secondary-info"]}>
        <div className={classes.location}>
          <h2>Location</h2>
          <h2>Date: 12/21/2021</h2>
        </div>
        <p>This is a description about the product</p>
      </div>
    </div>
  );
};

export default ProductCard;
