import { createContext, useState } from "react";

// ETAPA 1 - CRIANDO O CONTEXTO
export const ProductContext = createContext();

// ETAPA 2 - CRIANDO O PROVIDER
// eslint-disable-next-line react/prop-types
function ProductContextProvider({ children }) {
 const [cartItems, setCartItems] = useState([]);

 // Função para adicionar um item ao carrinho
 function addToCart(product) {
  setCartItems((c) => [...c, product]);
 }

 // Removendo itens do carrinho ao finalizar compra
 function resetCart() {
  setCartItems([]);
 }

 // Fornecendo o contexto do carrinho e as funções para manipulá-lo
 return (
  <ProductContext.Provider value={{ cartItems, addToCart, resetCart }}>
   {children}
  </ProductContext.Provider>
 );
}

export default ProductContextProvider;
