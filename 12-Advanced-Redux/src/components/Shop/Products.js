import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  { id: "p1", price: 6, title: "A BOOK", description: "The BOOK of Boks" },
  {
    id: "p2",
    price: 7,
    title: "ANOTHER BOOK",
    description: "The BOOK of ANOUTEGR",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
