import React, { useContext } from 'react';

// Criando o contexto
const MyContext = React.createContext();

// Componente provedor
function MyProvider(props) {
  const sharedState = { 
    message: 'Hello from context!' 
  };

  return (
    <MyContext.Provider value={sharedState}>
      {props.children}
    </MyContext.Provider>
  );
}

// Componente consumidor
function MyComponent() {
  const context = useContext(MyContext);

  return (
    <div>
      <h1>{context.message}</h1>
    </div>
  );
}

// Usando os componentes
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;