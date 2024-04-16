import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ShopCart from "./components/pages/ShopCart";
import ProductsList from "./components/pages/ProductsList";
import ProductContextProvider from "./contexts/products";
import CounterHook from "./components/pages/CounterHook";

function App() {
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

export default App;
