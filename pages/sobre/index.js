import Link from "next/link";
import WhatsApp from "../../components/whatsapp-icon/WhatsApp";
import MetaTags from "../../components/Metatags/MetaTags";
import style from "./style.module.css";
const Sobre = () => {
  return (
    <>
      <MetaTags
        title="Pizzaria fernandes"
        description="(41)3266-9054  Acesse nosso site estamos prontos para atender"
        url="https://pizzariafernandes.com.br"
        urlImage="https://pizzariafernandes.com.br/screenshot.png"
      />
      <WhatsApp />
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
