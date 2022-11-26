import style from "./style.module.css";
import logo from "./logo-site.png";
import logoBlack from "./logo_black.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoB = ({ view }) => {
  if (!view) return null;
  return <Image src={logoBlack} width={180} height={70} alt="logo pizzaria" />;
};
const LogoW = ({ view }) => {
  if (!view) return null;
  return <Image src={logo} width={200} height={123} alt="logo pizzaria" />;
};

const Header = () => {
  const [viewLogoB, setViewLogoB] = React.useState(false);
  const [viewLogoW, setViewLogoW] = React.useState(true);

  function changeLogo() {
    if (window.scrollY > 100) {
      setViewLogoB(true);
      setViewLogoW(false);
    } else {
      setViewLogoB(false);
      setViewLogoW(true);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", changeLogo);

    return () => {
      window.removeEventListener("scroll", changeLogo);
    };
  }, []);

  return (
    <>
      <header className={style.header}>
        <div className={style.headerConter}>
          <div className={style.logo}>
            <LogoB view={viewLogoB} />
            <LogoW view={viewLogoW} />
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
        </div>
      </header>
    </>
  );
};

export default Header;
