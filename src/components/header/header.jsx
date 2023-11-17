import style from "./header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header_title}> Пока еще неизвестный сайт</h1>
    </header>
  );
};