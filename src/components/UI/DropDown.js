import { Fragment, useState, useEffect } from "react";
import FilterItem from "../Filter/FilterItem";
import classes from "./DropDown.module.scss";

const DropDown = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (props.info !== undefined && props.info !== []) {
      console.log(props.info);
      const array = props.info;
      const opt = array.map((option) => {
        return <FilterItem option={option} />;
      });
      setOptions(opt);
    }
  }, [props.info]);

  useEffect(() => {
    setIsValid(true);
  }, [options]);

  return (
    <Fragment>
      <select name="Products" className={classes["select-box"]}>
        <option value="" disabled selected>
          {props.title}
        </option>
        {isValid && options}
      </select>
    </Fragment>
  );
};

export default DropDown;
