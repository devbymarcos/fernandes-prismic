import style from "./style.module.css";
import Image from "next/image";
import pizzaImage from "./pizza-512.png";
import Link from "next/link";
import React from "react";
import { GRUPO_GET } from "../../lib/api";

const Menu = () => {
  const [dataGrupos, setDataGrupos] = React.useState(null);

  async function getGrupos() {
    const { url, options } = GRUPO_GET();
    const response = await fetch(url, options);
    const { data } = await response.json();
    console.log("🚀 ~ file: index.js ~ line 15 ~ getGrupos ~ data", data);

    setDataGrupos(data);
  }

  React.useEffect(() => {
    getGrupos();
  }, []);

  if (!dataGrupos) return null;
  return (
    <>
      <section className={style.menu}>
        <div className={style.titleMenu}>
          <h1>Cardápio</h1>
          <p>Escolha a categoria</p>
        </div>
        <div className={style.category}>
          {dataGrupos.map((item) => {
            return (
              <div className={style.categoryItemGrid}>
                <Link href={`/pizzas/${item.attributes.slug}`}>
                  <Image
                    className={style.bgItem}
                    src={pizzaImage}
                    width={145}
                    height={145}
                    alt="pizza  "
                  />
                  <div className={style.textItem}>
                    <p>{item.attributes.Nome}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
