import classes from "./Filter.module.scss";
import DropDown from "../UI/DropDown";
import { useEffect, useState } from "react";

const Filter = (props) => {
  const [productNames, setProductNames] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    let productNameArray = props.products.map((product) => {
      let { product_name } = product;
      return product_name;
    });
    setProductNames(productNameArray);
  }, []);

  useEffect(() => {
    if (productNames !== []) {
      console.log(productNames);
      setIsValid(true);
    }
  }, [productNames]);

  return (
    <div className={classes["main-div"]}>
      <div className={classes.header}>
        <h3>Filters</h3>
      </div>

      <div className={classes["dropdown-box"]}>
        {isValid && <DropDown title="Products" info={productNames} />}
        <DropDown title="State" info={props.states} />
        <DropDown title="City" info={props.cities} />
      </div>
    </div>
  );
};

export default Filter;
