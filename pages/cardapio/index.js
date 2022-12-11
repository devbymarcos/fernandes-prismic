import style from "./style.module.css";
import Image from "next/image";
import pizzaImage from "./pizza-512.png";
import Link from "next/link";
import React from "react";
import { GRUPO_GET } from "../../lib/api";
import WhatsApp from "../../components/whatsapp-icon/WhatsApp";
import MetaTags from "../../components/Metatags/MetaTags";

const Menu = () => {
  const [dataGrupos, setDataGrupos] = React.useState(null);

  async function getGrupos() {
    const { url, options } = GRUPO_GET();
    const response = await fetch(url, options);
    const { data } = await response.json();
    setDataGrupos(data);
  }

  React.useEffect(() => {
    getGrupos();
  }, []);

  if (!dataGrupos) return null;
  return (
    <>
      <WhatsApp />
      <MetaTags
        title="Pizzaria Fernandes - Cardápio"
        description="(41)3266-9054  Acesse nosso site estamos prontos para atender"
        url="https://pizzariafernandes.com.br"
        urlImage="https://pizzariafernandes.com.br/screenshot.png"
      />
      <section className={style.menu}>
        <div className={style.titleMenu}>
          <h1>Cardápio</h1>
          <p>Escolha a categoria</p>
        </div>
        <div className={style.category}>
          {dataGrupos.map((item) => {
            return (
              <div key={item.id} className={style.categoryItemGrid}>
                <Link href={`/pizzas/${item.id}`}>
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
