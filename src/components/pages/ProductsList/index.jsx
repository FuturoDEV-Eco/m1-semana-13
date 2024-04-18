import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contexts/products";

import styles from "./index.module.css";

function ProductsList() {
 // ETAPA 4 - UTILIZANDO O CONTEXTO EM QUALQUER COMPONENTE QUE ESTIVER ENVOLVIDO PELO PROVIDER
 const { cartItems, addToCart } = useContext(ProductContext);

 // Lista de produtos
 const products = [
  { id: 1, name: "Leite", price: 2.99 },
  { id: 2, name: "Sabonete", price: 4.99 },
  { id: 3, name: "Maionese", price: 12.5 }
 ];

 return (
  <div>
   <header>
    <div className={styles.headerItems}>
     <h2>Produtos</h2>
     <button>
      <Link to="/counter-hook">Hook counter</Link>
     </button>
     <button>
      <Link to="/register-product">Registrar produto</Link>
     </button>
    </div>
    <button>
     <Link to="/shop-cart">Items no carrinho {cartItems.length}</Link>
    </button>
   </header>

   {/* Mapeando e exibindo a lista de produtos */}
   <div className={styles.productsList}>
    {products.map((product) => (
     <div key={product.id}>
      <h3>
       {product.name} R$ {product.price}
      </h3>
      {/* Botão para adicionar o produto ao carrinho */}
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
     </div>
    ))}
   </div>
  </div>
 );
}

export default ProductsList;
