import style from "./style.module.css";
import Link from "next/link";
const Localization = () => {
  return (
    <>
      <section className={`container ${style.contact}`}>
        <div className={style.titleContact}>
          <h1>Localização</h1>
          <p>Rua osmario de lima 269 - Capão da imbuia - Curitiba Pr</p>
        </div>
        <div className={style.maps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.10808541972!2d-49.21882168442688!3d-25.43464973930637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce576f6a33a51%3A0xd3ac2f737b644c57!2sR.%20Osm%C3%A1rio%20de%20Lima%2C%20269%20-%20Cap%C3%A3o%20da%20Imbuia%2C%20Curitiba%20-%20PR%2C%2082810-260!5e0!3m2!1spt-BR!2sbr!4v1669332662788!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Localization;
