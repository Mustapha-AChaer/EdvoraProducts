import classes from "./ProductDisplay.module.scss";
import ProductSlider from "./ProductsSlider";

const ProductDisplay = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Edvora</h1>
      <h4 className={classes["secondary-title"]}>Products</h4>
      <ProductSlider />
      <ProductSlider />
    </section>
  );
};

export default ProductDisplay;
