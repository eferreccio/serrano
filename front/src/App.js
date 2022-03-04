import './App.css';
import Header from './components/header/Header';
import ProductWrapper from './components/productsWrapper/ProductWrapper';
import DetailsWrapper from './components/detailsWrapper/DetailsWrapper';
import OrderWrapper from './components/ordersWrapper/OrderWrapper';

function App() {
  return (
    <div>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&family=Raleway:ital,wght@1,200&display=swap');
      </style>
      <div className="allApp">
        <div className="mainHeader">
          <Header />        
        </div >
        <div className="productsWrapper">
          <ProductWrapper />   
        </div>
        <div className="detailsWrapper">
          <DetailsWrapper />   
        </div>
        <div className="orderWrapper">
          <OrderWrapper />   
        </div>
      </div>
    </div>
  );
}

export default App;
