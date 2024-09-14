import './App.css';
import Product from './Product';
import Container from './Container';


function App() {
  return (
    <div>
      <Container>
        <Product productName="Ayakkabi" price={50000}/>
      </Container>
    </div>
  );
}

export default App;
