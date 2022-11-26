import Link from "next/link";
import React from "react";
import { PRODUCTS_GET } from "../../lib/api";
import style from "./style.module.css";

const Pizzas = ({ data }) => {
  const broto = data[0].attributes.Broto_valor
    ? data[0].attributes.Broto_valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    : null;
  const media = data[0].attributes.Media_valor
    ? data[0].attributes.Media_valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    : null;
  const grande = data[0].attributes.Grande_valor
    ? data[0].attributes.Grande_valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    : null;
  const big = data[0].attributes.Big_valor
    ? data[0].attributes.Big_valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    : null;

  return (
    <>
      <section className={style.menu}>
        <header className={style.titleMenu}>
          <h1>{data[0].attributes.Nome}</h1>
          <p>Ecolha e chame clicando em pedir</p>
        </header>

        <div className={style.listPizzas}>
          <div className={` container ${style.boxPriceName}`}>
            {broto && (
              <div className={style.priceName}>
                <span> 4 fatias</span>
                <p>Broto {broto}</p>
              </div>
            )}
            {media && (
              <div className={style.priceName}>
                <span> 6 fatias</span>
                <p>Media {media}</p>
              </div>
            )}

            {grande && (
              <div className={style.priceName}>
                <span> 8 fatias</span>
                <p>Grande {grande}</p>
              </div>
            )}
            {big && (
              <div className={style.priceName}>
                <span> 16 fatias</span>
                <p>Big {big}</p>
              </div>
            )}
          </div>
          <div className={`container ${style.bodyList}`}>
            {data[0].attributes.produtos.data.map((item) => {
              return (
                <article key={item.id}>
                  <h3>{item.attributes.Nome}</h3>
                  <p>{item.attributes.Descricao}</p>
                  <Link
                    href={`https://wa.me/554132660954?text=Quero%20pedir%20uma%20${item.attributes.Nome}%20-%20${data[0].attributes.Nome}`}
                  >
                    Pedir
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pizzas;

export async function getServerSideProps(context) {
  const { url, options } = PRODUCTS_GET(context.params.slug);
  const response = await fetch(url, options);
  const { data } = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
