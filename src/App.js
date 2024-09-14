import './App.css';
import Product from './Product';

function App() {

  const productName = "buzdolabi";

  return (
<div>
  <Product productName = "ayakkabi" price = {3000} />
  <Product productName = "telefon" price = {15000} />
  <Product productName={productName} price = {30000} />
</div>
  );
}

export default App;
