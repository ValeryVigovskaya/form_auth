import style from "./form.module.css";
import { Input } from "../input/input";
import { useForm } from "../../hooks/useForm";
import { Button } from "../button/button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Modal } from "../../modal/modal";

export const Form = ({ userData }) => {
  const [demoData, setDemoData] = useState(userData);
  const { values, handleChange } = useForm({ email: "", password: "" });
  const [isVisible, setVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  const updateData = (evt) => {
    evt.preventDefault();
    fetch("api/update_user_data", {
      method: "post",
      body: JSON.stringify(values),
    }).then((response) => {
      if (response) {
        setDemoData(values);
        setIsOpenModal(true);
     
      }
    });
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    values.email = '';
    values.password = '';
  };

  function onClickForgotPass() {
    navigate("/form_auth/forgot-password", { replace: true });
  }
  console.log(demoData);

  return (
    <>
      <form className={style.form} onSubmit={updateData}>
        <fieldset className={style.fieldset}>
          <legend className={style.form_title}>Вход в профиль</legend>
          <Input
            placeholder="Введите почту"
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
          />
          <Input
            placeholder="Введите пароль"
            value={values.password}
            onChange={handleChange}
            type={isVisible ? "text" : "password"}
            name="password"
            icon={true}
            onIconClick={() => setVisible(!isVisible)}
          />
          <div className={style.button_container}>
            <Button type="submit">Войти</Button>
            <a href="#kdal" className={style.link} onClick={onClickForgotPass}>
              Не помню пароль
            </a>
          </div>
        </fieldset>
      </form>
      {isOpenModal && (
        <Modal onClose={handleCloseModal}>
          <p className={style.modal_title}>Поздравляем! Вы успешно вошли.</p>
        </Modal>
      )}
    </>
  );
};
