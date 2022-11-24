import Link from "next/link";
import { useRouter } from "next/router";
import style from "./style.module.css";

const Pizzas = () => {
  const router = useRouter();
  const { slug } = router.query;
  const pizza = "calabresa";

  let items = [];
  for (let i = 0; i < 6; i++) {
    items.push(
      <article>
        <h3>Calabresa</h3>
        <p>Molho,mussarela, calabresa fatiada e orégano</p>
        <Link
          href={`https://wa.me/554132660954?text=Quero%20pedir%20uma%20${pizza}`}
        >
          Pedir
        </Link>
      </article>
    );
  }

  return (
    <>
      <section className={style.menu}>
        <header className={style.titleMenu}>
          <h1>{slug}</h1>
          <p>Ecolha e chame clicando em pedir</p>
        </header>

        <div className={style.listPizzas}>
          <div className={` container ${style.boxPriceName}`}>
            <div className={style.priceName}>
              <span> 8 fatias</span>
              <p>Grande 18.00</p>
            </div>
            <div className={style.priceName}>
              <span> 8 fatias</span>
              <p>Grande 18.00</p>
            </div>
            <div className={style.priceName}>
              <span> 8 fatias</span>
              <p>Grande 18.00</p>
            </div>
            <div className={style.priceName}>
              <span> 8 fatias</span>
              <p>Grande 18.00</p>
            </div>
          </div>
          <div className={`container ${style.bodyList}`}>{items}</div>
        </div>
      </section>
    </>
  );
};

export default Pizzas;
