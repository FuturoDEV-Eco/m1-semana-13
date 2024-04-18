import { useForm } from "react-hook-form";

import styles from "./index.module.css";

function RegisterProduct() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 function onSubmit(formValue) {
  // lidar com o valor do formulário: enviar para api, enviar pra um contexto, etc..
  console.log("valor do formulário", formValue);
 }

 return (
  <div>
   <h3>Cadastro de produto</h3>

   {/* uso da função handleSubmit para tratar o formulário e enviar os valores para a função personalizada onSubmit */}
   <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <div>
     <label htmlFor="name">Nome do produto</label>
     <input
      type="text"
      {...register("name", {
       required: "Por favor, insira o nome do produto",
       minLength: { value: 3, message: "Insira um nome de produto válido" },
       maxLength: {
        value: 120,
        message: "Insira um nome de produto com no máximo 120 caracteres"
       }
      })}
     />
     {errors?.name && (
      <p className={styles.errorMessage}>{errors.name.message}</p>
     )}
    </div>

    <div>
     <label htmlFor="value">Valor do produto</label>
     <input
      type="number"
      step="any" // para números float
      {...register("value", {
       required: "Por favor, insira o valor do produto"
      })}
     />
     {errors?.value && (
      <p className={styles.errorMessage}>{errors.value.message}</p>
     )}
    </div>

    <button type="submit">Cadastrar</button>
   </form>
  </div>
 );
}

export default RegisterProduct;
