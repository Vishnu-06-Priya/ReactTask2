import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Cards from './Cards';
import Cart from './Cart';
import Header from './Header';
function App() {
  let product = [{
    id: 1,
    title: "Fancy Product",
    img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpINs-qi1oeN9FXV-ww7OveYwlPOAptFVdWxu2COX7&s",
    price: 8000,
    star: true,
    sale: false,
    btnname: "Add to Cart",
  }, {
    id: 2,
    title: 'Special Item',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwN7Fbz7of4KlybGK2UDq_sPTStqamw12HDZDB0xY&s',
    price: 1800,
    star: true,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 3,
    title: 'Sale Item',
    img: 'https://cdn4.vectorstock.com/i/1000x1000/38/93/seal-icon-with-big-sale-text-vector-18823893.jpg',
    price: 2500,
    star: false,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 4,
    title: 'Popular Item',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgulKfKDrx1qxL2GY0ZnpwZbmDUsyjXuVZ3jRa6pyiA&s',
    price: 4000,
    star: true,
    sale: false,
    btnname: "Add to Cart",
  }, {
    id: 5,
    title: 'Sale Item',
    img: 'https://cdn4.vectorstock.com/i/1000x1000/38/93/seal-icon-with-big-sale-text-vector-18823893.jpg',
    price: 2500,
    star: false,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 6,
    title: "Fancy Product",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpINs-qi1oeN9FXV-ww7OveYwlPOAptFVdWxu2COX7&s",
    price: 25000,
    star: true,
    sale: false,
    btnname: "Add to Cart",
  }, {
    id: 7,
    title: 'Special Item',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwN7Fbz7of4KlybGK2UDq_sPTStqamw12HDZDB0xY&s',
    price: 1800,
    star: true,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 8,
    title: 'Popular Item',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgulKfKDrx1qxL2GY0ZnpwZbmDUsyjXuVZ3jRa6pyiA&s',
    price: 9000,
    star: true,
    sale: true,
    btnname: "Add to Cart",
  },
  {
    id: 9,
    title: 'Sale Item',
    img: 'https://cdn4.vectorstock.com/i/1000x1000/38/93/seal-icon-with-big-sale-text-vector-18823893.jpg',
    price: 2500,
    star: false,
    sale: false,
    btnname: "Add to Cart",
  }
  ];
  const [counts, setCounts] = useState(0)
  const [cartList, setCart] = useState([])
  const [total, setTotal] = useState(0)


  let addToCart = (product) => {
    setCart([...cartList, product])
    setTotal(total + product.price)
    setCounts(counts + 1);
  };
  
let removeCart = (product) =>{
  let itemIndex = cartList.findIndex((item)=> product.id === item.id);
  cartList.splice(itemIndex,1);
  setCart([...cartList]);
  setTotal(total-product.price);
  setCounts(counts - 1);
}

const incQuant = (cartItems) => {
  let itemIndex = cartList.findIndex((item)=> product.id === item.id);
  cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
  setCart([...cartList])
  setTotal(total + cartItems.price)
}

const decQuant = (cartItems) => {
  let itemIndex = cartList.findIndex((item)=> product.id === item.id);
  cartList[itemIndex].quantity = cartList[itemIndex].quantity - 1;
  setCart([...cartList])
  setTotal(total - cartItems.price)
}

  return (
    <div className="App">
      <Header counts = {counts}/>
    <div className="conatiner">
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            {product.map((product) => <Cards product={product} addToCart={addToCart} cartList={cartList} />)}
          </div>
        </div>
        <div className='col-lg-4'>
          <h3>Your Cart Lists</h3>
          <Cart 
          cartList={cartList} 
          removeCart={removeCart}
          incQuant={incQuant}
          decQuant={decQuant}
          />
          <h4>Total :Rs.{total} </h4>
        </div>
      </div>
      <footer class="py-5 bg-dark">
        <div class="container"><p class=" text-center text-white">Copyright © Your Website 2022</p></div>
      </footer>
      </div>
</div>
  );
}

export default App
