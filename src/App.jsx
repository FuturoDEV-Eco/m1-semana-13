import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ShopCart from "./components/pages/ShopCart";
import ProductsList from "./components/pages/ProductsList";
import ProductContextProvider from "./contexts/products";
import CounterHook from "./components/pages/CounterHook";

function App() {
 // preciso do estado em que o counter está e uma função que atualize o counter
 // const [count, increment, incrementTwo] = useCounter()
 // const [product, incrementProduct, incrementTwoproducts] = useCounter()

 // se eu colocar codigo js aqui vai executar novamente em todas as renderizações

 const router = createBrowserRouter([
  {
   path: "/",
   element: <ProductsList />
  },
  {
   path: "shop-cart",
   element: <ShopCart />
  },
  {
   path: "counter-hook",
   element: <CounterHook />
  }
 ]);

 // ETAPA 3 - ENVOLVENDO OS COMPONENTES QUE USARÃO O CONTEXTO COM O PROVIDER
 return (
  <ProductContextProvider>
   <RouterProvider router={router} />
  </ProductContextProvider>
 );
}

{
 /* <h1>M1 - Semana 13</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => increment()}>
        Adicionar + 1 ao contador
        </button>

        <button onClick={() => incrementTwo()}>
          Adicionar + 2 ao contador
        </button>
      </div>

      <div className="card">
        <h3>Carrinho de compras {product}</h3>
        <button onClick={() => incrementProduct()}>
        Adicionar 1 item
        </button>

        <button onClick={() => incrementTwoproducts()}>
          Adicionar 2 items
        </button>
      </div> */
}

export default App;
