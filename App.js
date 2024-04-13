import "./styles.css";
import { Items } from "./component/Items";
import { Cart } from "./component/Cart";

export default function App() {
  return (
    <div className="App">
      <Items name = "Apple" Price = {3000}></Items>
      <Items name = "Vivo" Price = {7000}></Items>
      <Items name = "Samsung" Price = {2000}></Items>
      <Items name = "Realme" Price = {5000}></Items>
      <Cart></Cart>
    </div>
  );
}
