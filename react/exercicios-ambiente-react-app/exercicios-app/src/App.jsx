import { useState } from 'react'
import reactLogo from './assets/react.svg'
import audiFoto from './assets/audi.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  let a = 10;
  let b = 2;
  let c = a + b;

  function myFunction(p1, p2) {
    return p1 * p2;
  }
  alert(myFunction(5,5));

  function nome() {
    return "Filipe"
  }
  alert(nome);

  return (
    <div className="App">      
      <h1>{"Hello World!"}</h1>
      <p>{"Meu nome é Filipe Bratti, e esse é minha primeira alteração em um projeto React!"}</p>
      <br />
      <img src={reactLogo} alt="Imagem da Logo do React" srcset="" width={200} />
      <br /><br />
      <img src={audiFoto} alt="" width={300} />
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Mercedes</li>
      </ul>
      <label htmlFor="nome">Qual seu nome?</label><br />
      <input type="text" name="nome" id="nome" /><br /><br />
      <button>Enviar</button>     

    </div>
    
  )
}

export default App
