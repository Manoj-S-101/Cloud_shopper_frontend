import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import BASE_URL from "../../service/BaseAddress";

const Popular = () => {
  const [data1, setData] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/popularinwomen`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="popular">
      <h1>Popluar In Women</h1>
      <div className="popular-products">
        {data1.map((product, i) => {
          return (
            <Item
              key={i}
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
