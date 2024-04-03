import ProductCategoryRow from "./components/ProductCategoryRow.Jsx";
import ProductRow from "./components/ProductRow.Jsx";
import ProductTable from "./components/ProductTable.Jsx";
import SearchBar from "./components/SearchBar";
import FilterableProductTable from "./components/FilterableProductTable";

const PRODUCTS = [
  {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
  {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
  {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
  {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
  {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
  {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
