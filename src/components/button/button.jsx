import style from './button.module.css'

export const Button = () => {
  return (
    <div className={style.button_container}>
      <button type='submit' className={style.button}>
        Войти
      </button>
    </div>
  );
};
