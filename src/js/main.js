import ProductList from "./ProductList.mjs";
import ProductData from './ProductData.mjs';

const productListElement = document.querySelector("#productList");
const dataSource = new ProductData("products"); // “products.json” en /public
const productList = new ProductList("products", dataSource, productListElement);

productList.init();


