import Image from "next/image";
import Link from "next/link";

import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={style.homeContent}>
        <h1>Aproveite as nossas pizzas</h1>
        <div className={style.btnHome}>
          <Link className={style.btnProducts} href="/cardapio">
            Cardápio
          </Link>
          <Link
            className={style.btnWhats}
            href=" https://wa.me/554132660954?text=Quero%20 pedir"
          >
            <Image src="/whats-icon.svg" width={30} height={30} />
            <span>Fale com a gente</span>
          </Link>
        </div>
      </div>
    </>
  );
}
