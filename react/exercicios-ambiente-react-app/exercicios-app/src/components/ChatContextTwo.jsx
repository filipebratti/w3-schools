import React, { useContext } from 'react';

// Criando o contexto
const CartContext = React.createContext();

// Componente provedor
function CartProvider(props) {
  const [cart, setCart] = React.useState([]);

  function addToCart(product) {
    setCart(cart => [...cart, product]);
  }

  function removeFromCart(product) {
    setCart(cart => cart.filter(item => item.id !== product.id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

// Componente consumidor
function ProductList() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente consumidor
function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Usando os componentes
function App() {
  return (
    <CartProvider>
      <ProductList />
      <Cart />
    </CartProvider>
  );
}

export default App;