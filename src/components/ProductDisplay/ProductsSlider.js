import ProductCard from "./ProductCard";
import classes from "./ProductsSlider.module.scss";

const ProductSlider = () => {
  return (
    <section>
      <div className={classes.title}>
        <h1>Product Name</h1>
      </div>
      <div className={classes.slider}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductSlider;
