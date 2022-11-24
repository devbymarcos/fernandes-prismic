import style from "./style.module.css";
import logo from "./logo-site.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Image src={logo} width={200} height={123} />
        </div>
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
              <Link href="/localizacao">Localização</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
