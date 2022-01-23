import React, { useEffect, useState } from "react";

import Filter from "./components/Filter/Filter";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import SideNote from "./components/SideNote";

import "./scss/index.scss";

const removeDuplicates = (array) => {
  return array.filter((value, index) => array.indexOf(value) === index);
};
function App() {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("https://assessment-edvora.herokuapp.com/")
      .then((res) => res.json())
      .then((resp) => {
        setProducts(resp);
        setLoad(true);
      })
      .then(() => {});
  }, []);

  useEffect(() => {
    if (products !== []) {
      console.log(products);

      let stateArray = products.map((product) => {
        return product.address.state;
      });
      stateArray = removeDuplicates(stateArray);
      setStates(stateArray);

      let cityArray = products.map((product) => {
        return product.address.city;
      });
      cityArray = removeDuplicates(cityArray);
      setCities(cityArray);
    }
  }, [products]);

  useEffect(() => {
    if (states !== [] && cities !== [] && products !== []) {
      setLoad(true);
    }
  }, [states, cities]);

  return (
    <div className="app">
      <div className="appParent">
        {load && <Filter cities={cities} states={states} products={products} />}
        {load && <ProductDisplay />}
      </div>
      <SideNote />
    </div>
  );
}

export default App;
