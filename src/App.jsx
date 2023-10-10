import { useState } from "react";
import Product from "./components/Product";

const productsDB = [
  {
    id: "pr_1",
    title: "Heineken Beer",
    price: 5,
    img: "./img/beer.jpeg",
    isAgeRestricted: true,
  },
  {
    id: "pr_2",
    title: "Nike Shoes",
    price: 199,
    img: "./img/shoe.jpeg",
    isAgeRestricted: false,
  },
  {
    id: "pr_3",
    title: "Pizza Peperoni",
    price: 20,
    img: "./img/pizza.webp",
    isAgeRestricted: false,
  },
];

function App() {
  const [isAdult, setIsAdult] = useState(false);

  return (
    <>
      <main>
        <h1>Products:</h1>
        <div className="products-container">
          {productsDB.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
