import style from "./style.module.css";
import Image from "next/image";
import pizzaImage from "./pizza-512.png";
import Link from "next/link";
const Menu = () => {
  let items = [];
  for (let i = 0; i < 6; i++) {
    items.push(
      <div className={style.categoryItemGrid}>
        <Link href={`/pizzas/tradicionais`}>
          <Image
            className={style.bgItem}
            src={pizzaImage}
            width={145}
            height={145}
          />
          <div className={style.textItem}>
            <p>Promocianais 18.00</p>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <>
      <section className={style.menu}>
        <div className={style.titleMenu}>
          <h1>Cardápio</h1>
          <p>Escolha a categoria</p>
        </div>
        <div className={style.category}>{items}</div>
      </section>
    </>
  );
};

export default Menu;
