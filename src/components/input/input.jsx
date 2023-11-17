import React from "react";
import style from "./input.module.css";
import eye from'../../images/cb6f99af-956a-4b8d-8802-3412c3f9046e_pixelied-hi.svg';

export const Input = ({
  placeholder,
  type,
  icon = false,
  onIconClick,
  ...rest
}) => {

  return (
    <div className={style.content}>
      <input
        className={style.input}
        placeholder={placeholder}
        type={type}
       {...rest}

      />
      {icon && (
        <img src={eye} alt="" className={style.icon} onClick={() => onIconClick()}/>
      )}
    </div>
  );
};
