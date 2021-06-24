import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummyProducts = [
  { id: 1, name: "laptop", price: 4353, description: "A device" },
  { id: 2, name: "Ball", price: 67, description: "A Toy" },
  { id: 3, name: "Mobile", price: 3333, description: "A device" },
  { id: 4, name: "car", price: 30000, description: "A vehicle" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
