import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <p>Todos os direitos reservados 2022</p>
        <p>Pizzaria Fernandes</p>

        <Link href="https://fernandes.codemars.dev/admin">admin</Link>
      </footer>
    </>
  );
};

export default Footer;
