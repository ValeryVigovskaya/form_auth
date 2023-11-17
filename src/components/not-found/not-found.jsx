import style from "./not-found.module.css"

export const NotFound = () => {
    return (
      <div className={style.container}>
        <h3 className={style.title}>404 page not found</h3>
        <p className={style.subtitle}>Извините, пока, эта страничка не готова</p>
      </div>
    );
  };