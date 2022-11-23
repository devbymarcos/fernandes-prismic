import Link from "next/link";
import style from "./style.module.css";

import Image from "next/image";

const SideBar = () => {
  return (
    <>
      <div className={style.sidebar}>
        <nav className={style.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/cardapio">Cardápio</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <Link href="/localizacao">Localização</Link>
            </li>
          </ul>
          <div className={style.phone}>
            <p>(41) 3266-0954</p>
            <p>(41) 3267-4053</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
