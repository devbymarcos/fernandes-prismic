import Link from "next/link";
import style from "./style.module.css";
const Sobre = () => {
  return (
    <>
      <section className={`container ${style.about}`}>
        <div className={style.titleAbout}>
          <h1>Sobre</h1>
          <p>
            As nossas pizzas promocionais possuem as seguintes características:
            <br />
            * possuem um tamanho de 35cm, esse tamanho representa 8 fatias.
            <br /> * você pode pedir apenas um sabor por pizza, não sendo
            possível fazer meio-a-meio ou outros tipos de divisão.
            <br /> * Para entregas, temos um custo adicional do nosso amigo
            motoboy
          </p>
          <p>
            Você também tem a opção do nosso cardápio normal com mais de{" "}
            <u>125 sabores</u> que podem ser feitas com mais de um sabor
          </p>
        </div>
        <Link className={style.btnAbout} href="/cardapio">
          Confira o cardápio
        </Link>
      </section>
    </>
  );
};

export default Sobre;
